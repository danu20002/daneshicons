import React from 'react';

export const iconData = {
  "id": "VersalePermit",
  "name": "VersalePermit",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.78 3.89 L 18.30 14.95 L 9.34 4.46 L 13.68 12.53"
      }
    ],
    [
      "circle",
      {
        "cx": "16.78",
        "cy": "3.89",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "18.30",
        "cy": "14.95",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "9.34",
        "cy": "4.46",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.68",
        "cy": "12.53",
        "r": "0.67"
      }
    ]
  ]
};

export const VersalePermit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.78 3.89 L 18.30 14.95 L 9.34 4.46 L 13.68 12.53" />
      <circle cx="16.78" cy="3.89" r="0.71" />
      <circle cx="18.30" cy="14.95" r="0.82" />
      <circle cx="9.34" cy="4.46" r="0.59" />
      <circle cx="13.68" cy="12.53" r="0.67" />
      {children}
    </svg>
  );
});

export default VersalePermit;
