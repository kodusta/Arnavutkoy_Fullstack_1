import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../store/blogSlice";
import BlogCard from "./BlogCard";

export default function Main() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  let content;

  if (blogStatus === "loading") {
    content = <div>Loading</div>;
  } else if (blogStatus === "succeeded") {
    content = blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
  } else if (blogStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <div className="main-content">{content}</div>;
}
