import React from 'react';

export const iconData = {
  "id": "VegliaSconce",
  "name": "VegliaSconce",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.31 10.76 L 9.31 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.31 10.76 L 18.61 20.69"
      }
    ],
    [
      "circle",
      {
        "cx": "18.31",
        "cy": "10.76",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.31",
        "cy": "14.67",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.61",
        "cy": "20.69",
        "r": "1.5"
      }
    ]
  ]
};

export const VegliaSconce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.31 10.76 L 9.31 14.67" />
      <path d="M 18.31 10.76 L 18.61 20.69" />
      <circle cx="18.31" cy="10.76" r="1.5" />
      <circle cx="9.31" cy="14.67" r="1.5" />
      <circle cx="18.61" cy="20.69" r="1.5" />
      {children}
    </svg>
  );
});

export default VegliaSconce;
