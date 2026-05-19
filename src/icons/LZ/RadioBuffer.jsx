import React from 'react';

export const iconData = {
  "id": "RadioBuffer",
  "name": "RadioBuffer",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 18.71 L 8.10 4.64 L 15.72 11.57 L 18.11 15.59 L 8.23 14.37 L 15.96 7.65 L 12.41 2.93 L 14.32 2.26"
      }
    ],
    [
      "circle",
      {
        "cx": "2.09",
        "cy": "18.71",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "8.10",
        "cy": "4.64",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "15.72",
        "cy": "11.57",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "18.11",
        "cy": "15.59",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "8.23",
        "cy": "14.37",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "15.96",
        "cy": "7.65",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.41",
        "cy": "2.93",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "2.26",
        "r": "1.42"
      }
    ]
  ]
};

export const RadioBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 18.71 L 8.10 4.64 L 15.72 11.57 L 18.11 15.59 L 8.23 14.37 L 15.96 7.65 L 12.41 2.93 L 14.32 2.26" />
      <circle cx="2.09" cy="18.71" r="0.77" />
      <circle cx="8.10" cy="4.64" r="0.57" />
      <circle cx="15.72" cy="11.57" r="1.15" />
      <circle cx="18.11" cy="15.59" r="1.11" />
      <circle cx="8.23" cy="14.37" r="1.47" />
      <circle cx="15.96" cy="7.65" r="0.77" />
      <circle cx="12.41" cy="2.93" r="1.18" />
      <circle cx="14.32" cy="2.26" r="1.42" />
      {children}
    </svg>
  );
});

export default RadioBuffer;
