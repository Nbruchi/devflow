"use server";

import { IAnswerDoc } from "@/database/answer.model";
import action from "../handlers/action";
import { AnswerServerSchema } from "../validations";
import { handleError } from "../handlers/error";
import mongoose from "mongoose";
import { Question, Answer } from "@/database";
import { NotFoundError } from "../http-errors";
import { revalidatePath } from "next/cache";
import ROUTES from "@/constants/routes";

export const createAnswer = async (params: CreateAnswerParams): Promise<ActionResponse<IAnswerDoc>> => {
  const validationResult = await action({ params, schema: AnswerServerSchema, authorize: true });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { content, questionId } = validationResult.params!;
  const userId = validationResult?.session?.user?.id;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const question = await Question.findById(questionId);
    if (!question) throw new NotFoundError("Question");

    const [newAnswer] = await Answer.create([{ author: userId, question: questionId, content }], { session });
    if (!newAnswer) throw new Error("Failed to create answer");

    question.answers += 1;
    await question.save({ session });
    await session.commitTransaction();

    revalidatePath(ROUTES.QUESTION(questionId));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newAnswer)),
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
};
