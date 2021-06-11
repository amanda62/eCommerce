import React from "react";
import { makeStyles } from "@material-ui/styles";
import { constants } from "../constants";
import { uniqBy } from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: `${constants.spacing(1.5)}px 0`,
    alignSelf: "center",
    width: "100%",
  },
  colorName: {
    fontSize: constants.spacing(1.5),
    margin: constants.spacing(0.5),
    textAlign: "center",
  },
  colorSwatch: { margin: `0 ${constants.spacing(1)}px 0 0`, cursor: "pointer" },
}));

function ColorPicker({ product, currentType, setCurrentType }) {
  const classes = useStyles();
  const size = constants.spacing(4);

  return (
    <div className={classes.container}>
      {uniqBy(product.types, "color").map((type) => (
        <div
          className={classes.colorSwatch}
          key={type.color}
          onClick={() => setCurrentType(type)}
        >
          <div
            className={classes.colorCircle}
            style={{
              backgroundColor: type.color,
              width: size,
              height: size,
              margin: `0 ${constants.spacing(1)}px`,
              borderRadius: constants.spacing(3),
              border: `4px double ${constants.palette.background}`,
            }}
          ></div>
          <div
            className={classes.colorName}
            style={{ fontWeight: type === currentType ? "bold" : "normal" }}
          >
            {type.color}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorPicker;
