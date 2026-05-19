import React from 'react';

export const iconData = {
  "id": "StabiliOvert",
  "name": "StabiliOvert",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.71 18.34 L 8.30 3.16 L 15.70 14.55 L 19.82 17.12 L 16.96 6.87 L 15.68 5.56 L 11.90 21.26 L 21.20 10.39"
      }
    ],
    [
      "circle",
      {
        "cx": "2.71",
        "cy": "18.34",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "8.30",
        "cy": "3.16",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "15.70",
        "cy": "14.55",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "19.82",
        "cy": "17.12",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "16.96",
        "cy": "6.87",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "15.68",
        "cy": "5.56",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "11.90",
        "cy": "21.26",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "21.20",
        "cy": "10.39",
        "r": "1.09"
      }
    ]
  ]
};

export const StabiliOvert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.71 18.34 L 8.30 3.16 L 15.70 14.55 L 19.82 17.12 L 16.96 6.87 L 15.68 5.56 L 11.90 21.26 L 21.20 10.39" />
      <circle cx="2.71" cy="18.34" r="0.75" />
      <circle cx="8.30" cy="3.16" r="0.62" />
      <circle cx="15.70" cy="14.55" r="0.52" />
      <circle cx="19.82" cy="17.12" r="0.67" />
      <circle cx="16.96" cy="6.87" r="1.42" />
      <circle cx="15.68" cy="5.56" r="1.39" />
      <circle cx="11.90" cy="21.26" r="1.40" />
      <circle cx="21.20" cy="10.39" r="1.09" />
      {children}
    </svg>
  );
});

export default StabiliOvert;
