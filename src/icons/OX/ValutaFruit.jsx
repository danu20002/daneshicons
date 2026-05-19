import React from 'react';

export const iconData = {
  "id": "ValutaFruit",
  "name": "ValutaFruit",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 11.55 L 16.42 4.54 L 14.74 12.92 L 15.37 3.15 L 20.42 9.67"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "11.55",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "16.42",
        "cy": "4.54",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "14.74",
        "cy": "12.92",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "15.37",
        "cy": "3.15",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "20.42",
        "cy": "9.67",
        "r": "0.55"
      }
    ]
  ]
};

export const ValutaFruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 11.55 L 16.42 4.54 L 14.74 12.92 L 15.37 3.15 L 20.42 9.67" />
      <circle cx="3.53" cy="11.55" r="0.97" />
      <circle cx="16.42" cy="4.54" r="1.19" />
      <circle cx="14.74" cy="12.92" r="0.64" />
      <circle cx="15.37" cy="3.15" r="0.85" />
      <circle cx="20.42" cy="9.67" r="0.55" />
      {children}
    </svg>
  );
});

export default ValutaFruit;
