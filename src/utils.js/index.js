import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
    //sorts blogs from latest to oldest
        //1.16.34

    return blogs.slice().sort((a,b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}