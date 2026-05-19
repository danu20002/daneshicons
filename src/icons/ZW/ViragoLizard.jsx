import React from 'react';

export const iconData = {
  "id": "ViragoLizard",
  "name": "ViragoLizard",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 15.48 L 17.41 12.95 L 8.23 6.99 L 14.94 16.23 L 5.81 21.05 L 20.07 10.35 L 20.52 3.99 L 8.31 2.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.04",
        "cy": "15.48",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "17.41",
        "cy": "12.95",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "8.23",
        "cy": "6.99",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "14.94",
        "cy": "16.23",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "5.81",
        "cy": "21.05",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "20.07",
        "cy": "10.35",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "20.52",
        "cy": "3.99",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "8.31",
        "cy": "2.58",
        "r": "1.04"
      }
    ]
  ]
};

export const ViragoLizard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 15.48 L 17.41 12.95 L 8.23 6.99 L 14.94 16.23 L 5.81 21.05 L 20.07 10.35 L 20.52 3.99 L 8.31 2.58" />
      <circle cx="6.04" cy="15.48" r="1.06" />
      <circle cx="17.41" cy="12.95" r="0.65" />
      <circle cx="8.23" cy="6.99" r="1.05" />
      <circle cx="14.94" cy="16.23" r="0.57" />
      <circle cx="5.81" cy="21.05" r="1.13" />
      <circle cx="20.07" cy="10.35" r="0.51" />
      <circle cx="20.52" cy="3.99" r="1.38" />
      <circle cx="8.31" cy="2.58" r="1.04" />
      {children}
    </svg>
  );
});

export default ViragoLizard;
