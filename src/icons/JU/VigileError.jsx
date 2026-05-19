import React from 'react';

export const iconData = {
  "id": "VigileError",
  "name": "VigileError",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.45 15.63 L 6.21 9.68 L 7.84 9.72 L 9.41 16.68 L 19.60 7.05 L 5.58 21.41 L 13.26 21.72 L 19.91 3.40"
      }
    ],
    [
      "circle",
      {
        "cx": "9.45",
        "cy": "15.63",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "6.21",
        "cy": "9.68",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "7.84",
        "cy": "9.72",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "9.41",
        "cy": "16.68",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "19.60",
        "cy": "7.05",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "5.58",
        "cy": "21.41",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "13.26",
        "cy": "21.72",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "19.91",
        "cy": "3.40",
        "r": "0.66"
      }
    ]
  ]
};

export const VigileError = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.45 15.63 L 6.21 9.68 L 7.84 9.72 L 9.41 16.68 L 19.60 7.05 L 5.58 21.41 L 13.26 21.72 L 19.91 3.40" />
      <circle cx="9.45" cy="15.63" r="1.34" />
      <circle cx="6.21" cy="9.68" r="1.28" />
      <circle cx="7.84" cy="9.72" r="0.64" />
      <circle cx="9.41" cy="16.68" r="1.10" />
      <circle cx="19.60" cy="7.05" r="1.01" />
      <circle cx="5.58" cy="21.41" r="1.01" />
      <circle cx="13.26" cy="21.72" r="1.06" />
      <circle cx="19.91" cy="3.40" r="0.66" />
      {children}
    </svg>
  );
});

export default VigileError;
