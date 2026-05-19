import React from 'react';

export const iconData = {
  "id": "VidimoForce",
  "name": "VidimoForce",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.43 21.20 L 8.11 14.31 L 17.84 21.92 L 11.92 16.79 L 14.23 15.69 L 16.68 15.50"
      }
    ],
    [
      "circle",
      {
        "cx": "9.43",
        "cy": "21.20",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "8.11",
        "cy": "14.31",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "17.84",
        "cy": "21.92",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "11.92",
        "cy": "16.79",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.23",
        "cy": "15.69",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "16.68",
        "cy": "15.50",
        "r": "1.11"
      }
    ]
  ]
};

export const VidimoForce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.43 21.20 L 8.11 14.31 L 17.84 21.92 L 11.92 16.79 L 14.23 15.69 L 16.68 15.50" />
      <circle cx="9.43" cy="21.20" r="1.25" />
      <circle cx="8.11" cy="14.31" r="1.24" />
      <circle cx="17.84" cy="21.92" r="0.97" />
      <circle cx="11.92" cy="16.79" r="0.86" />
      <circle cx="14.23" cy="15.69" r="0.52" />
      <circle cx="16.68" cy="15.50" r="1.11" />
      {children}
    </svg>
  );
});

export default VidimoForce;
