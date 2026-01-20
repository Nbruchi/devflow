import AllAnswers from "@/components/all-answers";
import TagCard from "@/components/cards/tag-card";
import Preview from "@/components/editor/preview";
import AnswerForm from "@/components/forms/answer-form";
import Metric from "@/components/metric";
import SaveQuestion from "@/components/questions/save-question";
import UserAvatar from "@/components/user-avatar";
import Votes from "@/components/votes";
import ROUTES from "@/constants/routes";
import { getAnswers } from "@/lib/actions/answer.action";
import { hasSavedQuestion } from "@/lib/actions/collection.action";
import { getQuestion, incrementViews } from "@/lib/actions/question.action";
import { hasVoted } from "@/lib/actions/vote.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { Suspense } from "react";

const QuestionDetails = async ({ params, searchParams }: RouteParams) => {
  const { id } = await params;
  const { page, pageSize, filter } = await searchParams;
  const { success, data: question } = await getQuestion({ questionId: id });

  after(async () => {
    await incrementViews({ questionId: id });
  });

  const {
    success: answersSuccess,
    data: answersResult,
    error,
  } = await getAnswers({
    questionId: id,
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    filter,
  });

  if (!success || !question) redirect("/404");

  const hasVotedPromise = hasVoted({ targetId: question._id, targetType: "question" });
  const hasSavedQuestionPromise = hasSavedQuestion({ questionId: question._id });

  const { title, content, tags, author, createdAt, views, answers } = question;

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between">
          <div className="flex items-center justify-start gap-1">
            <UserAvatar
              id={author._id}
              name={author.name}
              imageUrl={author.image}
              fallbackClassName="text-[10px]"
              className="size-[22px]"
            />
            <Link href={ROUTES.PROFILE(author._id)}>
              <p className="paragraph-semibold text-dark300_light700">{author.name}</p>
            </Link>
          </div>
          <div className="flex justify-end gap-2">
            <Suspense fallback={<Loader2 className="size-4 animate-spin" />}>
              <Votes
                upvotes={question.upvotes}
                downvotes={question.downvotes}
                targetType="question"
                targetId={question._id}
                hasVotedPromise={hasVotedPromise}
              />
            </Suspense>
            <Suspense fallback={<Loader2 className="size-4 animate-spin" />}>
              <SaveQuestion questionId={question._id} hasSavedQuestionPromise={hasSavedQuestionPromise} />
            </Suspense>
          </div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full">{title}</h2>
      </div>
      <div className="mt-5 mb-8 flex flex-wrap gap-4">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="clock icon"
          value={` asked ${getTimeStamp(new Date(createdAt))}`}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/message.svg"
          alt="message icon"
          value={answers}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/eye.svg"
          alt="eye icon"
          value={formatNumber(views)}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
      </div>
      <Preview content={content} />
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      <section className="my-5">
        <AllAnswers
          data={answersResult?.answers}
          success={answersSuccess}
          error={error}
          page={Number(page)}
          isNext={answersResult?.isNext || false}
          totalAnswers={answersResult?.totalAnswers || 0}
        />
      </section>
      <section className="my-5">
        <AnswerForm questionId={question._id} questionTitle={question.title} questionContent={question.content} />
      </section>
    </>
  );
};

export default QuestionDetails;
