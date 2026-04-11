import React from "react";
import styles from "./MultiSelectBox.module.css";
import ArrowBtn from "./../../assets/icons/shared/arrowBtn";
import { useState } from "react";

const MultiSelectBox = ({ placeholder, data, setData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const checkedPlaceHolder = () => {
    let checkedList = data.filter((i) => i.check).map((i) => i.name);
    if (checkedList.length) {
      return checkedList.join(",").length > 50
        ? `${checkedList.join(",").slice(0, 50)}...`
        : checkedList.join(",");
    } else {
      return placeholder;
    }
  };
  
  const handleChecked = (obj) => {
    let newData = data.map((listItem) =>
      listItem.name === obj.name
        ? { ...listItem, check: !listItem.check }
        : listItem
    );
    

    setData(newData);
  };

  return (
    <>
      {open && <div onClick={handleOpen} className={styles.modal}></div>}
      <div className={styles.multiSelectBox}>
        <span onClick={handleOpen}>{checkedPlaceHolder()}</span>
        <ArrowBtn handleClick={handleOpen} dist={open ? "up" : "down"} />
        {open && (
          <>
            <ul className={styles.dropDownList}>
              {data.length &&
                data.map(({ id, name, check }) => (
                  <li key={name} onClick={() => handleChecked({ name, check })}>
                    <label onClick={() => handleChecked({ name, check })}>
                      {name}
                    </label>
                    <input
                      onChange={() => {}}
                      type='checkbox'
                      name={name}
                      id={name}
                      checked={check}
                    />
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default MultiSelectBox;
