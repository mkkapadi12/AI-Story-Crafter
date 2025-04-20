import React from "react";

export default function ShapeDecorator({ type, color, className = "" }) {
  switch (type) {
    case "circle":
      return (
        <div
          className={`rounded-full ${className}`}
          style={{ backgroundColor: color }}
        ></div>
      );
    case "triangle":
      return (
        <div
          className={`${className}`}
          style={{
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderBottom: `30px solid ${color}`,
          }}
        ></div>
      );
    case "square":
      return (
        <div
          className={`${className}`}
          style={{ backgroundColor: color }}
        ></div>
      );
    case "star":
      return (
        <div className={`${className} text-2xl`} style={{ color }}>
          ★
        </div>
      );
    default:
      return null;
  }
}
