import React from 'react';

export const iconData = {
  "id": "BoreVandal",
  "name": "BoreVandal",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.47 20.14 L 5.77 16.54 L 11.78 16.65 L 9.81 7.41 L 12.01 13.39"
      }
    ],
    [
      "circle",
      {
        "cx": "15.47",
        "cy": "20.14",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "5.77",
        "cy": "16.54",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "11.78",
        "cy": "16.65",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "9.81",
        "cy": "7.41",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.01",
        "cy": "13.39",
        "r": "0.60"
      }
    ]
  ]
};

export const BoreVandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.47 20.14 L 5.77 16.54 L 11.78 16.65 L 9.81 7.41 L 12.01 13.39" />
      <circle cx="15.47" cy="20.14" r="0.76" />
      <circle cx="5.77" cy="16.54" r="0.81" />
      <circle cx="11.78" cy="16.65" r="0.55" />
      <circle cx="9.81" cy="7.41" r="1.37" />
      <circle cx="12.01" cy="13.39" r="0.60" />
      {children}
    </svg>
  );
});

export default BoreVandal;
