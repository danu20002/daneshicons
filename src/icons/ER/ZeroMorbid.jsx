import React from 'react';

export const iconData = {
  "id": "ZeroMorbid",
  "name": "ZeroMorbid",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.42 7.96 L 14.02 11.34 L 6.64 8.02 L 4.93 4.49 L 21.58 4.64"
      }
    ],
    [
      "circle",
      {
        "cx": "10.42",
        "cy": "7.96",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "14.02",
        "cy": "11.34",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "6.64",
        "cy": "8.02",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "4.93",
        "cy": "4.49",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "21.58",
        "cy": "4.64",
        "r": "1.22"
      }
    ]
  ]
};

export const ZeroMorbid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.42 7.96 L 14.02 11.34 L 6.64 8.02 L 4.93 4.49 L 21.58 4.64" />
      <circle cx="10.42" cy="7.96" r="1.18" />
      <circle cx="14.02" cy="11.34" r="1.10" />
      <circle cx="6.64" cy="8.02" r="1.13" />
      <circle cx="4.93" cy="4.49" r="0.94" />
      <circle cx="21.58" cy="4.64" r="1.22" />
      {children}
    </svg>
  );
});

export default ZeroMorbid;
