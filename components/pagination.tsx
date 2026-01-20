"use client";

import { formUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
  page: number | undefined | string;
  isNext: boolean;
  containerClass?: string;
}

const Pagination = ({ page, isNext, containerClass }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (type: "prev" | "next") => {
    const nextPageNumber = type === "prev" ? Number(page) - 1 : Number(page) + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  return (
    <div className={cn("mt-5 flex w-full items-center justify-center gap-2", containerClass)}>
      {/* Previous page button */}
      {Number(page) > 1 && (
        <Button
          className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
          onClick={() => handleNavigation("prev")}
        >
          <p className="body-medium text-dark200_light800">Prev</p>
        </Button>
      )}

      <div className="bg-primary-500 flex items-center justify-center rounded-md px-3.5 py-2">
        <p className="body-semibold text-light-900">{page}</p>
      </div>
      {isNext && (
        <Button
          className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
          onClick={() => handleNavigation("next")}
        >
          <p className="body-medium text-dark200_light800">Next</p>
        </Button>
      )}
    </div>
  );
};

export default Pagination;
