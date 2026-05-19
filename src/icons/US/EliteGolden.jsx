import React from 'react';

export const iconData = {
  "id": "EliteGolden",
  "name": "EliteGolden",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.67 3.25 L 13.69 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.67 3.25 L 8.87 10.08"
      }
    ],
    [
      "path",
      {
        "d": "M 13.67 3.25 L 3.82 13.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.69 16.48 L 8.87 10.08"
      }
    ],
    [
      "path",
      {
        "d": "M 13.69 16.48 L 3.82 13.26"
      }
    ],
    [
      "circle",
      {
        "cx": "13.67",
        "cy": "3.25",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.69",
        "cy": "16.48",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.87",
        "cy": "10.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.82",
        "cy": "13.26",
        "r": "1.5"
      }
    ]
  ]
};

export const EliteGolden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.67 3.25 L 13.69 16.48" />
      <path d="M 13.67 3.25 L 8.87 10.08" />
      <path d="M 13.67 3.25 L 3.82 13.26" />
      <path d="M 13.69 16.48 L 8.87 10.08" />
      <path d="M 13.69 16.48 L 3.82 13.26" />
      <circle cx="13.67" cy="3.25" r="1.5" />
      <circle cx="13.69" cy="16.48" r="1.5" />
      <circle cx="8.87" cy="10.08" r="1.5" />
      <circle cx="3.82" cy="13.26" r="1.5" />
      {children}
    </svg>
  );
});

export default EliteGolden;
