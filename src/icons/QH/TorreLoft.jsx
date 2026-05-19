import React from 'react';

export const iconData = {
  "id": "TorreLoft",
  "name": "TorreLoft",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 7.77 Q 18.69 15.97 11.78 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 17.01 L 10.26 14.30 L 5.19 18.16 L 6.63 18.78 L 6.38 10.84 L 10.92 13.82 L 12.06 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 9.24 A 2.60 6.25 30 0 1 16.08 9.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 13.22 A 2.90 5.99 120 0 0 13.55 21.11"
      }
    ]
  ]
};

export const TorreLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 7.77 Q 18.69 15.97 11.78 19.06" />
      <path d="M 6.53 17.01 L 10.26 14.30 L 5.19 18.16 L 6.63 18.78 L 6.38 10.84 L 10.92 13.82 L 12.06 2.40" />
      <path d="M 18.92 9.24 A 2.60 6.25 30 0 1 16.08 9.13" />
      <path d="M 7.67 13.22 A 2.90 5.99 120 0 0 13.55 21.11" />
      {children}
    </svg>
  );
});

export default TorreLoft;
