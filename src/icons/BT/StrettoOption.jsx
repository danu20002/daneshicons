import React from 'react';

export const iconData = {
  "id": "StrettoOption",
  "name": "StrettoOption",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.75 7.11 L 8.58 18.58 L 21.69 21.84 L 19.19 14.64 L 13.00 14.43"
      }
    ],
    [
      "circle",
      {
        "cx": "11.75",
        "cy": "7.11",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "8.58",
        "cy": "18.58",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "21.69",
        "cy": "21.84",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "19.19",
        "cy": "14.64",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "13.00",
        "cy": "14.43",
        "r": "1.05"
      }
    ]
  ]
};

export const StrettoOption = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.75 7.11 L 8.58 18.58 L 21.69 21.84 L 19.19 14.64 L 13.00 14.43" />
      <circle cx="11.75" cy="7.11" r="0.50" />
      <circle cx="8.58" cy="18.58" r="1.49" />
      <circle cx="21.69" cy="21.84" r="0.93" />
      <circle cx="19.19" cy="14.64" r="0.87" />
      <circle cx="13.00" cy="14.43" r="1.05" />
      {children}
    </svg>
  );
});

export default StrettoOption;
