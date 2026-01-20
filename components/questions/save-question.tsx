"use client";

import { toggleSaveQuestion } from "@/lib/actions/collection.action";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { use, useState } from "react";
import { toast } from "sonner";

interface Props {
  questionId: string;
  hasSavedQuestionPromise: Promise<ActionResponse<{ saved: boolean }>>;
}

const SaveQuestion = ({ questionId, hasSavedQuestionPromise }: Props) => {
  const session = useSession();
  const userId = session?.data?.user?.id;
  const [isLoading, setIsLoading] = useState(false);

  const { data } = use(hasSavedQuestionPromise);

  const { saved: hasSaved } = data || {};

  const handleSave = async () => {
    if (isLoading) return;

    if (!userId) {
      return toast.error("You need to be logged in to save a question");
    }

    setIsLoading(true);

    try {
      const { success, data, error } = await toggleSaveQuestion({ questionId });

      if (!success) {
        throw new Error(error?.message || "Failed to save question");
      }

      toast.success(`Question ${data?.saved ? "saved" : "unsaved"} successfully`);
    } catch (error) {
      toast.error("Error", {
        description: error instanceof Error ? error.message : "Failed to save question",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Image
      src={hasSaved ? "/icons/star-filled.svg" : "/icons/star-red.svg"}
      alt="save"
      width={18}
      height={18}
      onClick={handleSave}
      className={`cursor-pointer ${isLoading && "opacity-50"}`}
      aria-label="Save question"
    />
  );
};

export default SaveQuestion;
