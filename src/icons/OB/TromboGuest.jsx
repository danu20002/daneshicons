import React from 'react';

export const iconData = {
  "id": "TromboGuest",
  "name": "TromboGuest",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 12.00 Q 15.77 13.01 19.77 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 16.48 Q 14.76 14.76 16.48 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 19.77 Q 13.01 15.77 12.00 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.97 Q 10.99 15.77 7.52 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 19.77 Q 9.24 14.76 4.23 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 16.48 Q 8.23 13.01 3.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 12.00 Q 8.23 10.99 4.23 7.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 7.52 Q 9.24 9.24 7.52 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.23 Q 10.99 8.23 12.00 3.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.03 Q 13.01 8.23 16.48 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 4.23 Q 14.76 9.24 19.77 7.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 7.52 Q 15.77 10.99 20.97 12.00"
      }
    ]
  ]
};

export const TromboGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 12.00 Q 15.77 13.01 19.77 16.48" />
      <path d="M 19.77 16.48 Q 14.76 14.76 16.48 19.77" />
      <path d="M 16.48 19.77 Q 13.01 15.77 12.00 20.97" />
      <path d="M 12.00 20.97 Q 10.99 15.77 7.52 19.77" />
      <path d="M 7.52 19.77 Q 9.24 14.76 4.23 16.48" />
      <path d="M 4.23 16.48 Q 8.23 13.01 3.03 12.00" />
      <path d="M 3.03 12.00 Q 8.23 10.99 4.23 7.52" />
      <path d="M 4.23 7.52 Q 9.24 9.24 7.52 4.23" />
      <path d="M 7.52 4.23 Q 10.99 8.23 12.00 3.03" />
      <path d="M 12.00 3.03 Q 13.01 8.23 16.48 4.23" />
      <path d="M 16.48 4.23 Q 14.76 9.24 19.77 7.52" />
      <path d="M 19.77 7.52 Q 15.77 10.99 20.97 12.00" />
      {children}
    </svg>
  );
});

export default TromboGuest;
