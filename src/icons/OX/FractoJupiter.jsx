import React from 'react';

export const iconData = {
  "id": "FractoJupiter",
  "name": "FractoJupiter",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.18 8.67 L 12.92 5.58 L 14.95 11.76 L 14.40 12.39 L 8.45 14.60 L 20.46 2.17"
      }
    ],
    [
      "circle",
      {
        "cx": "21.18",
        "cy": "8.67",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "12.92",
        "cy": "5.58",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "14.95",
        "cy": "11.76",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "12.39",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.45",
        "cy": "14.60",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "20.46",
        "cy": "2.17",
        "r": "0.71"
      }
    ]
  ]
};

export const FractoJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.18 8.67 L 12.92 5.58 L 14.95 11.76 L 14.40 12.39 L 8.45 14.60 L 20.46 2.17" />
      <circle cx="21.18" cy="8.67" r="0.85" />
      <circle cx="12.92" cy="5.58" r="0.79" />
      <circle cx="14.95" cy="11.76" r="1.21" />
      <circle cx="14.40" cy="12.39" r="0.93" />
      <circle cx="8.45" cy="14.60" r="1.08" />
      <circle cx="20.46" cy="2.17" r="0.71" />
      {children}
    </svg>
  );
});

export default FractoJupiter;
