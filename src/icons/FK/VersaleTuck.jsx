import React from 'react';

export const iconData = {
  "id": "VersaleTuck",
  "name": "VersaleTuck",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.54 14.18 L 7.73 8.31 L 18.69 3.38 L 13.34 3.74 L 13.68 12.12"
      }
    ],
    [
      "circle",
      {
        "cx": "17.54",
        "cy": "14.18",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "7.73",
        "cy": "8.31",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.69",
        "cy": "3.38",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "13.34",
        "cy": "3.74",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "13.68",
        "cy": "12.12",
        "r": "1.21"
      }
    ]
  ]
};

export const VersaleTuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.54 14.18 L 7.73 8.31 L 18.69 3.38 L 13.34 3.74 L 13.68 12.12" />
      <circle cx="17.54" cy="14.18" r="1.10" />
      <circle cx="7.73" cy="8.31" r="1.02" />
      <circle cx="18.69" cy="3.38" r="1.01" />
      <circle cx="13.34" cy="3.74" r="1.41" />
      <circle cx="13.68" cy="12.12" r="1.21" />
      {children}
    </svg>
  );
});

export default VersaleTuck;
