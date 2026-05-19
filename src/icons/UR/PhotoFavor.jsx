import React from 'react';

export const iconData = {
  "id": "PhotoFavor",
  "name": "PhotoFavor",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.86 16.53 Q 2.08 3.36 19.99 2.19"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 12.02 A 2.11 2.97 80 0 1 12.42 15.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 12.58 C 4.10 6.30, 11.20 3.14, 9.76 20.01"
      }
    ]
  ]
};

export const PhotoFavor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.86 16.53 Q 2.08 3.36 19.99 2.19" />
      <path d="M 14.55 12.02 A 2.11 2.97 80 0 1 12.42 15.99" />
      <path d="M 11.00 12.58 C 4.10 6.30, 11.20 3.14, 9.76 20.01" />
      {children}
    </svg>
  );
});

export default PhotoFavor;
