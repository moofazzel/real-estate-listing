import { Direction, ITrackBackground, RangeSlider } from "@/types/types";
import React, { useState } from "react";
// import { Range, getTrackBackground } from "../src/index";
import { Range } from "react-range";
import { getTrackBackground } from "./utils";

const RangeSlider = ({ MIN, MAX, TITLE, SYMBOL }: RangeSlider) => {
  const [values, setValues] = useState([MIN, MAX]);
  const STEP = 0.1;

  console.log(values);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <>
        <span
          style={{
            fontSize: "12px",
            color: "#484848",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {TITLE}
          <span
            style={{
              fontWeight: "400",
              marginLeft: "5px",
            }}
          >
            {SYMBOL && (
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {SYMBOL}
              </span>
            )}
            {values[0].toFixed()} -
            {SYMBOL && (
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {SYMBOL}
              </span>
            )}
            {values[1].toFixed()}
          </span>
        </span>
      </>

      <Range
        draggableTrack
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
              margin: "0 20px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "6px",
                width: "100%",
                background: getTrackBackground({
                  values,
                  colors: ["#ebebeb", "#ff5a5f", "#ebebeb"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "14px",
              width: "20px",
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "rgb(162, 147, 147) 0px 6px 11px",
              borderLeft: "3px solid #fff",
              borderRight: "3px solid #fff",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
