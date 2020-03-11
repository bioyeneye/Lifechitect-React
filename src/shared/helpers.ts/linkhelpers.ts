import { RefObject } from "react";

export const createMailtoLink = () => {
    return "mailto:info@liferithms.com"
};

export const createEmptyLink = () => {
    return "#"
};

export const scrollToRef = (ref: RefObject<HTMLElement>) => window.scrollTo(0, ref?.current?.offsetTop ?? 0);