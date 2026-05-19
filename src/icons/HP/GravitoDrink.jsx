import React from 'react';

export const iconData = {
  "id": "GravitoDrink",
  "name": "GravitoDrink",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 19.18 L 8.28 5.64 L 17.26 7.71 L 6.39 4.69 L 5.33 14.16 L 3.93 4.91 L 16.57 14.65 L 2.58 17.68"
      }
    ],
    [
      "circle",
      {
        "cx": "4.30",
        "cy": "19.18",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "8.28",
        "cy": "5.64",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "17.26",
        "cy": "7.71",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "6.39",
        "cy": "4.69",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "14.16",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "3.93",
        "cy": "4.91",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "16.57",
        "cy": "14.65",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "2.58",
        "cy": "17.68",
        "r": "0.85"
      }
    ]
  ]
};

export const GravitoDrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 19.18 L 8.28 5.64 L 17.26 7.71 L 6.39 4.69 L 5.33 14.16 L 3.93 4.91 L 16.57 14.65 L 2.58 17.68" />
      <circle cx="4.30" cy="19.18" r="0.71" />
      <circle cx="8.28" cy="5.64" r="0.72" />
      <circle cx="17.26" cy="7.71" r="0.53" />
      <circle cx="6.39" cy="4.69" r="1.23" />
      <circle cx="5.33" cy="14.16" r="1.44" />
      <circle cx="3.93" cy="4.91" r="1.49" />
      <circle cx="16.57" cy="14.65" r="0.59" />
      <circle cx="2.58" cy="17.68" r="0.85" />
      {children}
    </svg>
  );
});

export default GravitoDrink;
