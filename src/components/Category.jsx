function Category({ category, link }) {
  return (
    <li>
      <a className="cat-link" href="#">
        {category}
      </a>
    </li>
  );
}

export default Category;
