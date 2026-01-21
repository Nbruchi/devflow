"use server";

import { Question, User, Answer, Tag } from "@/database";
import action from "../handlers/action";
import { handleError } from "../handlers/error";
import { GlobalSearchSchema } from "../validations";

export const globalSearch = async (params: GlobalSearchParams) => {
  const validationResult = await action({ params, schema: GlobalSearchSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { query, type } = validationResult.params!;
  const regexQuery = { $regex: query, options: "i" };

  try {
    let results = [];

    const modelsAndTypes = [
      { model: Question, searchField: "title", type: "question" },
      { model: User, searchField: "name", type: "user" },
      { model: Answer, searchField: "content", type: "answer" },
      { model: Tag, searchField: "name", type: "tag" },
    ];

    const typeLower = type?.toLowerCase();

    const SearchableTypes = ["question", "answer", "user", "tags"];

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      for (const { model, searchField, type } of modelsAndTypes) {
        const queryResults = await model.find({ [searchField]: regexQuery }).limit(2);

        results.push(
          ...queryResults.map((item) => ({
            title: type === "answer" ? `Answers containing ${query}` : item[searchField],
            type,
            id: type === "answer" ? item.question : item._id,
          }))
        );
      }
    } else {
      const modelInfo = modelsAndTypes.find((item) => item.type === typeLower);
      if (!modelInfo) throw new Error("Invalid search type");

      const queryResults = await modelInfo.model.find({ [modelInfo.searchField]: regexQuery }).limit(8);

      results = queryResults.map((item) => ({
        title: type === "answer" ? `Answers containing ${query}` : item[modelInfo.searchField],
        type,
        id: type === "answer" ? item.question : item._id,
      }));
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(results)),
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
};
