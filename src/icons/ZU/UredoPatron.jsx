import React from 'react';

export const iconData = {
  "id": "UredoPatron",
  "name": "UredoPatron",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.58 6.28 A 4.12 6.48 59 0 1 20.28 10.29"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 8.28 A 2.74 6.47 63 0 1 8.86 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 5.82 L 14.72 19.77 L 21.92 19.01 L 14.58 7.77 L 11.56 15.78 L 3.04 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 14.11 A 2.08 2.11 172 0 0 4.87 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 10.93 C 11.65 11.91, 4.80 7.07, 2.15 3.47"
      }
    ]
  ]
};

export const UredoPatron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.58 6.28 A 4.12 6.48 59 0 1 20.28 10.29" />
      <path d="M 16.88 8.28 A 2.74 6.47 63 0 1 8.86 14.17" />
      <path d="M 8.21 5.82 L 14.72 19.77 L 21.92 19.01 L 14.58 7.77 L 11.56 15.78 L 3.04 17.11" />
      <path d="M 8.72 14.11 A 2.08 2.11 172 0 0 4.87 3.40" />
      <path d="M 5.27 10.93 C 11.65 11.91, 4.80 7.07, 2.15 3.47" />
      {children}
    </svg>
  );
});

export default UredoPatron;
