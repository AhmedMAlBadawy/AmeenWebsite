import { useState, useEffect } from "react";

const ArrowBtn = ({ handleClick, dist }) => {

  const [Dist, setDist] = useState({
    transform: "rotate(45deg)",
  });
  
  useEffect(() => {
    switch (dist) {
      case "down":
        setDist({
          transform: "rotate(45deg)",
        });
        break;
      case "left":
        setDist({
          transform: "rotate(135deg)",
        });
        c;
        break;
      case "right":
        setDist({
          transform: "rotate(-45deg)",
        });
        c;
        break;
      case "up":
        setDist({
          transform: "rotate(-135deg)",
        });
        break;

      default:
        break;
    }
  }, [dist])
  
  

  const styles = {
    arrowBtn: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all .5s ease-in-out",
      ":hover": {
        backgroundColor: "red",
      },
    },
    distination: {
      transition: "all .3s ease-in-out",
      border: "solid black",
      borderWidth: "0 3px 3px 0",
      display: "inline-block",
      padding: "3px",
      width: "12px",
      height: "12px",
      ...Dist,
      cursor: "pointer",
    },
  };

  return (
    <div onClick={handleClick} style={{ ...styles.arrowBtn }}>
      <span style={{ ...styles.distination }}></span>
    </div>
  );
};

export default ArrowBtn;
