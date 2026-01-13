import Image from "next/image";
import Link from "next/link";

interface MetricProps {
    imgUrl: string;
    alt: string;
    value: string | number;
    title: string;
    textStyles?: string;
    href?: string;
    isAuthor?: boolean;
    imageStyles?: string;
}

const Metric = ({ imgUrl, alt, value, title, textStyles, href, isAuthor, imageStyles }: MetricProps) => {
    const metricContent = (
        <>
            <Image
                src={imgUrl}
                alt={alt}
                width={16}
                height={16}
                className={`rounded-full object-contain ${imageStyles}`}
            />
            <p className={`${textStyles} flex items-center gap-1`}>
                {value}{" "}
                <span className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}>{title}</span>{" "}
            </p>
        </>
    );

    return href ? (
        <Link href={href} className="flex-center gap-1">
            {metricContent}
        </Link>
    ) : (
        <div className="flex-center gap-1">{metricContent}</div>
    );
};

export default Metric;
