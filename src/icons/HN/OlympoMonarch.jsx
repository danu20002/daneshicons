import React from 'react';

export const iconData = {
  "id": "OlympoMonarch",
  "name": "OlympoMonarch",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.60 17.76 Q 18.53 19.72 17.30 15.49"
      }
    ],
    [
      "path",
      {
        "d": "M 14.02 6.39 L 3.74 3.15 L 7.90 10.88 L 7.48 13.85 L 20.97 6.78 L 12.82 8.94 L 19.89 21.93 L 20.77 2.39"
      }
    ],
    [
      "path",
      {
        "d": "M 9.50 15.17 C 10.60 16.56, 5.99 2.90, 15.39 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 17.91 A 5.00 3.16 27 0 1 16.60 10.14"
      }
    ]
  ]
};

export const OlympoMonarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.60 17.76 Q 18.53 19.72 17.30 15.49" />
      <path d="M 14.02 6.39 L 3.74 3.15 L 7.90 10.88 L 7.48 13.85 L 20.97 6.78 L 12.82 8.94 L 19.89 21.93 L 20.77 2.39" />
      <path d="M 9.50 15.17 C 10.60 16.56, 5.99 2.90, 15.39 16.06" />
      <path d="M 18.75 17.91 A 5.00 3.16 27 0 1 16.60 10.14" />
      {children}
    </svg>
  );
});

export default OlympoMonarch;
