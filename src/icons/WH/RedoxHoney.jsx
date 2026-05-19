import React from 'react';

export const iconData = {
  "id": "RedoxHoney",
  "name": "RedoxHoney",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 6.68 a 7.10 2.129872179105878 0 1 0 14.20 0 a 7.10 2.129872179105878 0 1 0 -14.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 10.23 a 8.70 2.608550028079552 0 1 0 17.39 0 a 8.70 2.608550028079552 0 1 0 -17.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 13.77 a 8.70 2.608550028079552 0 1 0 17.39 0 a 8.70 2.608550028079552 0 1 0 -17.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 17.32 a 7.10 2.1298721791058774 0 1 0 14.20 0 a 7.10 2.1298721791058774 0 1 0 -14.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 0 12.00 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 1 12.00 20.87"
      }
    ]
  ]
};

export const RedoxHoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0" />
      <path d="M 4.90 6.68 a 7.10 2.129872179105878 0 1 0 14.20 0 a 7.10 2.129872179105878 0 1 0 -14.20 0" />
      <path d="M 3.30 10.23 a 8.70 2.608550028079552 0 1 0 17.39 0 a 8.70 2.608550028079552 0 1 0 -17.39 0" />
      <path d="M 3.30 13.77 a 8.70 2.608550028079552 0 1 0 17.39 0 a 8.70 2.608550028079552 0 1 0 -17.39 0" />
      <path d="M 4.90 17.32 a 7.10 2.1298721791058774 0 1 0 14.20 0 a 7.10 2.1298721791058774 0 1 0 -14.20 0" />
      <path d="M 12.00 3.13 A 2 2 0 0 0 12.00 20.87" />
      <path d="M 12.00 3.13 A 2 2 0 0 1 12.00 20.87" />
      {children}
    </svg>
  );
});

export default RedoxHoney;
