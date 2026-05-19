import React from 'react';

export const iconData = {
  "id": "ViolaLake",
  "name": "ViolaLake",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.81 10.85 L 14.83 7.26 L 16.22 12.39 L 13.96 5.74 L 3.91 14.18 L 11.48 8.51 L 8.06 10.34 L 3.76 20.31"
      }
    ],
    [
      "circle",
      {
        "cx": "12.81",
        "cy": "10.85",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.83",
        "cy": "7.26",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "16.22",
        "cy": "12.39",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "13.96",
        "cy": "5.74",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "3.91",
        "cy": "14.18",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "11.48",
        "cy": "8.51",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "8.06",
        "cy": "10.34",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "3.76",
        "cy": "20.31",
        "r": "0.67"
      }
    ]
  ]
};

export const ViolaLake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.81 10.85 L 14.83 7.26 L 16.22 12.39 L 13.96 5.74 L 3.91 14.18 L 11.48 8.51 L 8.06 10.34 L 3.76 20.31" />
      <circle cx="12.81" cy="10.85" r="1.03" />
      <circle cx="14.83" cy="7.26" r="1.06" />
      <circle cx="16.22" cy="12.39" r="0.87" />
      <circle cx="13.96" cy="5.74" r="0.57" />
      <circle cx="3.91" cy="14.18" r="1.00" />
      <circle cx="11.48" cy="8.51" r="1.04" />
      <circle cx="8.06" cy="10.34" r="0.97" />
      <circle cx="3.76" cy="20.31" r="0.67" />
      {children}
    </svg>
  );
});

export default ViolaLake;
