import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
const Categories = (props) => {
  const [categories, setcategories] = useState([]);
  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setcategories(data));
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ListGroup>
      {categories.map((category) => (
        <ListGroupItem
          active={category.categoryName === props.curretCategory}
          key={category.id}
          onClick={() => props.chanceCategory(category)}
        >
          {category.categoryName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Categories;
