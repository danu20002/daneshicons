import React from 'react';

export const iconData = {
  "id": "OrbiVast",
  "name": "OrbiVast",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.12 4.04 L 18.46 14.46 L 14.07 16.11 L 12.29 20.29 L 19.35 17.26 L 7.71 9.76 L 11.24 14.26 L 6.92 3.60"
      }
    ],
    [
      "circle",
      {
        "cx": "4.12",
        "cy": "4.04",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "18.46",
        "cy": "14.46",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.07",
        "cy": "16.11",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "12.29",
        "cy": "20.29",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "19.35",
        "cy": "17.26",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "7.71",
        "cy": "9.76",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "11.24",
        "cy": "14.26",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.92",
        "cy": "3.60",
        "r": "0.52"
      }
    ]
  ]
};

export const OrbiVast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.12 4.04 L 18.46 14.46 L 14.07 16.11 L 12.29 20.29 L 19.35 17.26 L 7.71 9.76 L 11.24 14.26 L 6.92 3.60" />
      <circle cx="4.12" cy="4.04" r="1.27" />
      <circle cx="18.46" cy="14.46" r="1.10" />
      <circle cx="14.07" cy="16.11" r="0.69" />
      <circle cx="12.29" cy="20.29" r="1.43" />
      <circle cx="19.35" cy="17.26" r="0.83" />
      <circle cx="7.71" cy="9.76" r="0.83" />
      <circle cx="11.24" cy="14.26" r="0.72" />
      <circle cx="6.92" cy="3.60" r="0.52" />
      {children}
    </svg>
  );
});

export default OrbiVast;
