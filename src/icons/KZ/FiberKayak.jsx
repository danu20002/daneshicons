import React from 'react';

export const iconData = {
  "id": "FiberKayak",
  "name": "FiberKayak",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.10 2.06 C 15.93 4.42, 14.25 5.61, 19.75 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 7.28 C 16.94 12.58, 8.13 13.34, 14.01 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.87 7.03 C 19.07 17.86, 9.58 18.64, 17.17 21.64"
      }
    ]
  ]
};

export const FiberKayak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.10 2.06 C 15.93 4.42, 14.25 5.61, 19.75 15.84" />
      <path d="M 3.80 7.28 C 16.94 12.58, 8.13 13.34, 14.01 20.02" />
      <path d="M 8.87 7.03 C 19.07 17.86, 9.58 18.64, 17.17 21.64" />
      {children}
    </svg>
  );
});

export default FiberKayak;
