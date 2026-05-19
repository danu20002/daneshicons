import React from 'react';

export const iconData = {
  "id": "TurcheseHavoc",
  "name": "TurcheseHavoc",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.90 10.81 L 6.72 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.90 10.81 L 15.30 8.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 16.76 L 6.72 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 16.76 L 15.30 8.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 15.43 L 15.30 8.72"
      }
    ],
    [
      "circle",
      {
        "cx": "12.90",
        "cy": "10.81",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.67",
        "cy": "16.76",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.72",
        "cy": "15.43",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.30",
        "cy": "8.72",
        "r": "1.5"
      }
    ]
  ]
};

export const TurcheseHavoc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.90 10.81 L 6.72 15.43" />
      <path d="M 12.90 10.81 L 15.30 8.72" />
      <path d="M 5.67 16.76 L 6.72 15.43" />
      <path d="M 5.67 16.76 L 15.30 8.72" />
      <path d="M 6.72 15.43 L 15.30 8.72" />
      <circle cx="12.90" cy="10.81" r="1.5" />
      <circle cx="5.67" cy="16.76" r="1.5" />
      <circle cx="6.72" cy="15.43" r="1.5" />
      <circle cx="15.30" cy="8.72" r="1.5" />
      {children}
    </svg>
  );
});

export default TurcheseHavoc;
