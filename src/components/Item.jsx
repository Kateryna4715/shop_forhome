function Item({ desc, image, price, shipping }) {
  return (
    <div className="item">
      <img className="item__img" src={`aprons/${image}.png`} alt={desc}></img>
      <h4>{desc}</h4>
      <p className="item__price">{price}$</p>
      {shipping && (
        <div className="shipping">
          <p>Free shipping</p>
        </div>
      )}
      <button className="btn-shop">
        <a href="#">Shop now</a>
      </button>
    </div>
  );
}

export default Item;
