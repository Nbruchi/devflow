import { EMPTY_ANSWERS } from "@/constants/states";
import DataRenderer from "./data-renderer";
import AnswerCard from "./cards/answer-card";
import CommonFilter from "./filters/common-filter";
import { AnswerFilters } from "@/constants/filters";
import Pagination from "./pagination";

interface Props extends ActionResponse<Answer[]> {
  page: number;
  isNext: boolean;
  totalAnswers: number;
}

const AllAnswers = ({ data, success, error, totalAnswers, page, isNext }: Props) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <CommonFilter filters={AnswerFilters} otherClasses="sm:min-w-32" containerClasses="max-xs:w-full" />
      </div>
      <DataRenderer
        data={data}
        error={error}
        success={success}
        empty={EMPTY_ANSWERS}
        render={(answers) => answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)}
      />
      <Pagination page={Number(page)} isNext={isNext || false} />
    </div>
  );
};

export default AllAnswers;
