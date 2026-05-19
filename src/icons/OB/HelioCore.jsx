import React from 'react';

export const iconData = {
  "id": "HelioCore",
  "name": "HelioCore",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.63 12.00 Q 14.66 13.10 18.81 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 18.81 18.81 Q 13.10 14.66 12.00 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.63 Q 10.90 14.66 5.19 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 18.81 Q 9.34 13.10 2.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 12.00 Q 9.34 10.90 5.19 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 5.19 Q 10.90 9.34 12.00 2.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.37 Q 13.10 9.34 18.81 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.81 5.19 Q 14.66 10.90 21.63 12.00"
      }
    ]
  ]
};

export const HelioCore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.63 12.00 Q 14.66 13.10 18.81 18.81" />
      <path d="M 18.81 18.81 Q 13.10 14.66 12.00 21.63" />
      <path d="M 12.00 21.63 Q 10.90 14.66 5.19 18.81" />
      <path d="M 5.19 18.81 Q 9.34 13.10 2.37 12.00" />
      <path d="M 2.37 12.00 Q 9.34 10.90 5.19 5.19" />
      <path d="M 5.19 5.19 Q 10.90 9.34 12.00 2.37" />
      <path d="M 12.00 2.37 Q 13.10 9.34 18.81 5.19" />
      <path d="M 18.81 5.19 Q 14.66 10.90 21.63 12.00" />
      {children}
    </svg>
  );
});

export default HelioCore;
