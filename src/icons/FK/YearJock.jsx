import React from 'react';

export const iconData = {
  "id": "YearJock",
  "name": "YearJock",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.76 12.48 L 8.57 5.96 L 2.02 7.69 L 14.64 16.62"
      }
    ],
    [
      "circle",
      {
        "cx": "16.76",
        "cy": "12.48",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "8.57",
        "cy": "5.96",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "2.02",
        "cy": "7.69",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "14.64",
        "cy": "16.62",
        "r": "1.49"
      }
    ]
  ]
};

export const YearJock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.76 12.48 L 8.57 5.96 L 2.02 7.69 L 14.64 16.62" />
      <circle cx="16.76" cy="12.48" r="1.03" />
      <circle cx="8.57" cy="5.96" r="1.25" />
      <circle cx="2.02" cy="7.69" r="0.93" />
      <circle cx="14.64" cy="16.62" r="1.49" />
      {children}
    </svg>
  );
});

export default YearJock;
