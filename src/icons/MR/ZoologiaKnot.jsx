import React from 'react';

export const iconData = {
  "id": "ZoologiaKnot",
  "name": "ZoologiaKnot",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 19.53 L 12.74 6.70"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 19.53 L 6.55 10.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.74 6.70 L 11.39 12.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.74 6.70 L 6.55 10.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.74 6.70 L 9.79 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 11.39 12.92 L 9.79 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 10.08 L 9.79 20.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.72",
        "cy": "19.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.74",
        "cy": "6.70",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.39",
        "cy": "12.92",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.55",
        "cy": "10.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.79",
        "cy": "20.24",
        "r": "1.5"
      }
    ]
  ]
};

export const ZoologiaKnot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 19.53 L 12.74 6.70" />
      <path d="M 4.72 19.53 L 6.55 10.08" />
      <path d="M 12.74 6.70 L 11.39 12.92" />
      <path d="M 12.74 6.70 L 6.55 10.08" />
      <path d="M 12.74 6.70 L 9.79 20.24" />
      <path d="M 11.39 12.92 L 9.79 20.24" />
      <path d="M 6.55 10.08 L 9.79 20.24" />
      <circle cx="4.72" cy="19.53" r="1.5" />
      <circle cx="12.74" cy="6.70" r="1.5" />
      <circle cx="11.39" cy="12.92" r="1.5" />
      <circle cx="6.55" cy="10.08" r="1.5" />
      <circle cx="9.79" cy="20.24" r="1.5" />
      {children}
    </svg>
  );
});

export default ZoologiaKnot;
