// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  //   items = [];

  if (items.length === 0)
    return (
      <>
        <p>No item Found</p>
      </>
    );

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {getMessage()}

      {/* TODO: in case no used getMessage true === "printf" */}
      {/* {items.length === 0 && <p>No item found</p>} */}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={}
            // className="list-group-item"
            key={item}
            onClick={
              handleClick
              //   (event) => console.log(event)
              // console.log(item, index)
            }
          >
            {item}
          </li>
        ))}
        {/* TODO: recomendation key=item.id (in really case) */}
      </ul>
    </>
  );
}

export default ListGroup;
