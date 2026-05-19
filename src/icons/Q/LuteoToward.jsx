import React from 'react';

export const iconData = {
  "id": "LuteoToward",
  "name": "LuteoToward",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 2.645666481088847 0 1 0 17.64 0 a 8.82 2.645666481088847 0 1 0 -17.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 5.76 A 2 2 0 0 0 18.24 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 5.76 A 2 2 0 0 1 18.24 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.18 A 2 2 0 0 0 12.00 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.18 A 2 2 0 0 1 12.00 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 5.76 A 2 2 0 0 0 5.76 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 5.76 A 2 2 0 0 1 5.76 18.24"
      }
    ]
  ]
};

export const LuteoToward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0" />
      <path d="M 3.18 12.00 a 8.82 2.645666481088847 0 1 0 17.64 0 a 8.82 2.645666481088847 0 1 0 -17.64 0" />
      <path d="M 18.24 5.76 A 2 2 0 0 0 18.24 18.24" />
      <path d="M 18.24 5.76 A 2 2 0 0 1 18.24 18.24" />
      <path d="M 12.00 3.18 A 2 2 0 0 0 12.00 20.82" />
      <path d="M 12.00 3.18 A 2 2 0 0 1 12.00 20.82" />
      <path d="M 5.76 5.76 A 2 2 0 0 0 5.76 18.24" />
      <path d="M 5.76 5.76 A 2 2 0 0 1 5.76 18.24" />
      {children}
    </svg>
  );
});

export default LuteoToward;
