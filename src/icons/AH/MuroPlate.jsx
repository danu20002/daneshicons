import React from 'react';

export const iconData = {
  "id": "MuroPlate",
  "name": "MuroPlate",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.81 6.18 L 12.81 15.69 L 14.71 19.23 L 4.36 10.10 L 3.75 21.28 L 20.49 14.00 L 6.16 12.35 L 16.17 5.67"
      }
    ],
    [
      "circle",
      {
        "cx": "21.81",
        "cy": "6.18",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "12.81",
        "cy": "15.69",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "14.71",
        "cy": "19.23",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "4.36",
        "cy": "10.10",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "3.75",
        "cy": "21.28",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "20.49",
        "cy": "14.00",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "6.16",
        "cy": "12.35",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "16.17",
        "cy": "5.67",
        "r": "0.81"
      }
    ]
  ]
};

export const MuroPlate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.81 6.18 L 12.81 15.69 L 14.71 19.23 L 4.36 10.10 L 3.75 21.28 L 20.49 14.00 L 6.16 12.35 L 16.17 5.67" />
      <circle cx="21.81" cy="6.18" r="0.51" />
      <circle cx="12.81" cy="15.69" r="0.71" />
      <circle cx="14.71" cy="19.23" r="0.94" />
      <circle cx="4.36" cy="10.10" r="0.58" />
      <circle cx="3.75" cy="21.28" r="0.56" />
      <circle cx="20.49" cy="14.00" r="0.71" />
      <circle cx="6.16" cy="12.35" r="1.00" />
      <circle cx="16.17" cy="5.67" r="0.81" />
      {children}
    </svg>
  );
});

export default MuroPlate;
