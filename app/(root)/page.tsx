import QuestionCard from "@/components/cards/question-card";
import DataRenderer from "@/components/data-renderer";
import HomeFilter from "@/components/filters/home-filter";
import LocalSearch from "@/components/search/local-search";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

const Page = async ({ searchParams }: RouteParams) => {
  const { page, pageSize, filter, query } = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { questions } = data || {};

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button asChild className="primary-gradient text-light-900 min-h-[46px] px-4 py-3">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch imgSrc="/icons/search.svg" placeholder="Search Questions..." otherClasses="flex-1" route="/" />
      </section>
      <HomeFilter />
      <DataRenderer success={success} error={error} data={questions} empty={EMPTY_QUESTION} render={(questions) => (
        <div className="mt-10 flex w-full flex-col gap-6">
          {questions.map((question) => (
            <QuestionCard key={question._id} question={question}/>
          ))}
        </div>
     )}/>
    </>
  );
};

export default Page;
