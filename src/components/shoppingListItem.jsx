import "./shoppingListItem.css";

function ShoppingListItem(props) {
  const handleClick = () => {
    props.onDelete(props.data);
  };
  
  return (
    <div className="shopping-item">
      <h4>{props.data.name}</h4>
      <button className="btn btn-sm btn-outline-danger" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default ShoppingListItem;
