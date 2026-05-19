import React from 'react';

export const iconData = {
  "id": "RepsoDilemma",
  "name": "RepsoDilemma",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.65 18.61 L 2.33 4.90 L 15.09 4.75 L 16.21 13.71 L 10.43 12.37 L 6.25 21.23 L 12.48 15.01 L 20.77 21.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.65",
        "cy": "18.61",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "2.33",
        "cy": "4.90",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "15.09",
        "cy": "4.75",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "16.21",
        "cy": "13.71",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.43",
        "cy": "12.37",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "6.25",
        "cy": "21.23",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "12.48",
        "cy": "15.01",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "20.77",
        "cy": "21.21",
        "r": "1.27"
      }
    ]
  ]
};

export const RepsoDilemma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.65 18.61 L 2.33 4.90 L 15.09 4.75 L 16.21 13.71 L 10.43 12.37 L 6.25 21.23 L 12.48 15.01 L 20.77 21.21" />
      <circle cx="17.65" cy="18.61" r="1.09" />
      <circle cx="2.33" cy="4.90" r="1.11" />
      <circle cx="15.09" cy="4.75" r="0.91" />
      <circle cx="16.21" cy="13.71" r="1.40" />
      <circle cx="10.43" cy="12.37" r="0.74" />
      <circle cx="6.25" cy="21.23" r="1.47" />
      <circle cx="12.48" cy="15.01" r="1.31" />
      <circle cx="20.77" cy="21.21" r="1.27" />
      {children}
    </svg>
  );
});

export default RepsoDilemma;
