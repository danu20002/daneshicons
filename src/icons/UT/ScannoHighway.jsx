import React from 'react';

export const iconData = {
  "id": "ScannoHighway",
  "name": "ScannoHighway",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.03 4.33 L 3.05 15.92 L 8.81 6.99 L 11.42 8.14"
      }
    ],
    [
      "circle",
      {
        "cx": "15.03",
        "cy": "4.33",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "3.05",
        "cy": "15.92",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "8.81",
        "cy": "6.99",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "11.42",
        "cy": "8.14",
        "r": "0.53"
      }
    ]
  ]
};

export const ScannoHighway = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.03 4.33 L 3.05 15.92 L 8.81 6.99 L 11.42 8.14" />
      <circle cx="15.03" cy="4.33" r="0.51" />
      <circle cx="3.05" cy="15.92" r="1.36" />
      <circle cx="8.81" cy="6.99" r="1.46" />
      <circle cx="11.42" cy="8.14" r="0.53" />
      {children}
    </svg>
  );
});

export default ScannoHighway;
