import React from 'react';

export const iconData = {
  "id": "ZoticoHurdle",
  "name": "ZoticoHurdle",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.46 12.00 Q 15.22 12.86 20.19 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 16.73 Q 14.36 14.36 16.73 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 20.19 Q 12.86 15.22 12.00 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.46 Q 11.14 15.22 7.27 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 20.19 Q 9.64 14.36 3.81 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 16.73 Q 8.78 12.86 2.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 12.00 Q 8.78 11.14 3.81 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 7.27 Q 9.64 9.64 7.27 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 3.81 Q 11.14 8.78 12.00 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.54 Q 12.86 8.78 16.73 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 3.81 Q 14.36 9.64 20.19 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 7.27 Q 15.22 11.14 21.46 12.00"
      }
    ]
  ]
};

export const ZoticoHurdle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.46 12.00 Q 15.22 12.86 20.19 16.73" />
      <path d="M 20.19 16.73 Q 14.36 14.36 16.73 20.19" />
      <path d="M 16.73 20.19 Q 12.86 15.22 12.00 21.46" />
      <path d="M 12.00 21.46 Q 11.14 15.22 7.27 20.19" />
      <path d="M 7.27 20.19 Q 9.64 14.36 3.81 16.73" />
      <path d="M 3.81 16.73 Q 8.78 12.86 2.54 12.00" />
      <path d="M 2.54 12.00 Q 8.78 11.14 3.81 7.27" />
      <path d="M 3.81 7.27 Q 9.64 9.64 7.27 3.81" />
      <path d="M 7.27 3.81 Q 11.14 8.78 12.00 2.54" />
      <path d="M 12.00 2.54 Q 12.86 8.78 16.73 3.81" />
      <path d="M 16.73 3.81 Q 14.36 9.64 20.19 7.27" />
      <path d="M 20.19 7.27 Q 15.22 11.14 21.46 12.00" />
      {children}
    </svg>
  );
});

export default ZoticoHurdle;
