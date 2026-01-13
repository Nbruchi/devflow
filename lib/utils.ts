import { techMap } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
    const normalizedTechName = techName.replace(/[./]/g, "").toLowerCase();
    return techMap[normalizedTechName] ? `${techMap[normalizedTechName]} colored` : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date) => {
    const now = new Date();
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

    const units = [
        { label: "year", seconds: 60 * 60 * 24 * 365 },
        { label: "month", seconds: 60 * 60 * 24 * 30 },
        { label: "day", seconds: 60 * 60 * 24 },
        { label: "hour", seconds: 60 * 60 },
        { label: "minute", seconds: 60 },
    ];

    for (const unit of units) {
        const interval = Math.floor(secondsAgo / unit.seconds);
        if (interval > 0) {
            return `${interval} ${unit.label}${interval > 1 ? "s" : ""} ago`;
        }
    }
    return "just now";
};
