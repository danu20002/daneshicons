import React from 'react';

export const iconData = {
  "id": "StiloPillow",
  "name": "StiloPillow",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.73 9.08 L 4.31 19.93 L 15.81 10.83 L 11.05 21.40 L 3.15 16.94 L 2.06 7.80 L 13.55 18.30 L 11.49 21.85"
      }
    ],
    [
      "circle",
      {
        "cx": "10.73",
        "cy": "9.08",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "4.31",
        "cy": "19.93",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "15.81",
        "cy": "10.83",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "11.05",
        "cy": "21.40",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "3.15",
        "cy": "16.94",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "2.06",
        "cy": "7.80",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "13.55",
        "cy": "18.30",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "11.49",
        "cy": "21.85",
        "r": "0.71"
      }
    ]
  ]
};

export const StiloPillow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.73 9.08 L 4.31 19.93 L 15.81 10.83 L 11.05 21.40 L 3.15 16.94 L 2.06 7.80 L 13.55 18.30 L 11.49 21.85" />
      <circle cx="10.73" cy="9.08" r="1.15" />
      <circle cx="4.31" cy="19.93" r="1.11" />
      <circle cx="15.81" cy="10.83" r="0.59" />
      <circle cx="11.05" cy="21.40" r="0.83" />
      <circle cx="3.15" cy="16.94" r="1.08" />
      <circle cx="2.06" cy="7.80" r="0.83" />
      <circle cx="13.55" cy="18.30" r="1.33" />
      <circle cx="11.49" cy="21.85" r="0.71" />
      {children}
    </svg>
  );
});

export default StiloPillow;
