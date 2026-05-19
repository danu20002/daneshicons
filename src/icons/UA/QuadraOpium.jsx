import React from 'react';

export const iconData = {
  "id": "QuadraOpium",
  "name": "QuadraOpium",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.57 17.79 L 19.94 10.18 L 8.44 5.78 L 3.64 21.78 L 11.42 7.78"
      }
    ],
    [
      "circle",
      {
        "cx": "14.57",
        "cy": "17.79",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "19.94",
        "cy": "10.18",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "8.44",
        "cy": "5.78",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "3.64",
        "cy": "21.78",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "11.42",
        "cy": "7.78",
        "r": "1.01"
      }
    ]
  ]
};

export const QuadraOpium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 14.57 17.79 L 19.94 10.18 L 8.44 5.78 L 3.64 21.78 L 11.42 7.78" />
      <circle cx="14.57" cy="17.79" r="0.98" />
      <circle cx="19.94" cy="10.18" r="0.72" />
      <circle cx="8.44" cy="5.78" r="1.07" />
      <circle cx="3.64" cy="21.78" r="0.54" />
      <circle cx="11.42" cy="7.78" r="1.01" />
      {children}
    </svg>
  );
});

export default QuadraOpium;
