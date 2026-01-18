import Image from "next/image";
import { ReactNode } from "react";

interface Props<T> {
  success: boolean;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  data?: T[] | null | undefined;
  empty: {
    title: string;
    message: string;
    button?: {
      text: string;
      href: string;
    };
  };
  render: (data: T[]) => ReactNode;
}

interface StateSkeletonProps {
  image: {
    light: string;
    dark: string;
    alt: string;
  };
  title: string;
  message: string;
  button?: {
    text: string;
    href: string;
  };
}

const StateSkeleton = ({ image, title, message, button }: StateSkeletonProps) => {
  return (
    <div className="mt-16">
      <>
        <Image src={image.dark} alt={image.alt} width={270} height={200} className="hidden object-contain dark:block" />
      </>
    </div>
  );
};

const DataRenderer = <T,>({ success, error, data, empty, render }: Props<T>) => {
  return <div>DataRenderer</div>;
};

export default DataRenderer;
