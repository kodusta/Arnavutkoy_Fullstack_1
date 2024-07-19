import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BlogDetail() {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === blogId)
  );

  if (!blog) {
    return <div>blog not found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}
