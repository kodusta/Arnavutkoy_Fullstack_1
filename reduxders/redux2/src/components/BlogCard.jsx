import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Card className="mb-3">
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardText>{blog.content.substring(0, 100)}...</CardText>
        <Button tag={Link} to={`/blog/${blog.id}`} color="success">
          Devamını Oku
        </Button>
      </CardBody>
    </Card>
  );
}
