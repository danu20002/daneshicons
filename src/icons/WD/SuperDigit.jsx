import React from 'react';

export const iconData = {
  "id": "SuperDigit",
  "name": "SuperDigit",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.49 18.65 L 21.24 9.26 L 12.69 8.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 7.12 Q 11.70 3.85 14.72 13.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 20.03 Q 20.24 2.18 15.65 3.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 5.49 L 7.70 19.77"
      }
    ]
  ]
};

export const SuperDigit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.49 18.65 L 21.24 9.26 L 12.69 8.24" />
      <path d="M 18.58 7.12 Q 11.70 3.85 14.72 13.73" />
      <path d="M 5.91 20.03 Q 20.24 2.18 15.65 3.39" />
      <path d="M 15.34 5.49 L 7.70 19.77" />
      {children}
    </svg>
  );
});

export default SuperDigit;
