import React from 'react';

export const iconData = {
  "id": "EchoGirl",
  "name": "EchoGirl",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 9.00 a 8.47 2.5418130342951466 0 1 0 16.95 0 a 8.47 2.5418130342951466 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 15.00 a 8.47 2.5418130342951466 0 1 0 16.95 0 a 8.47 2.5418130342951466 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 5.65 A 2 2 0 0 0 18.35 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 5.65 A 2 2 0 0 1 18.35 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.01 A 2 2 0 0 0 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.01 A 2 2 0 0 1 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 5.65 A 2 2 0 0 0 5.65 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 5.65 A 2 2 0 0 1 5.65 18.35"
      }
    ]
  ]
};

export const EchoGirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0" />
      <path d="M 3.53 9.00 a 8.47 2.5418130342951466 0 1 0 16.95 0 a 8.47 2.5418130342951466 0 1 0 -16.95 0" />
      <path d="M 3.53 15.00 a 8.47 2.5418130342951466 0 1 0 16.95 0 a 8.47 2.5418130342951466 0 1 0 -16.95 0" />
      <path d="M 18.35 5.65 A 2 2 0 0 0 18.35 18.35" />
      <path d="M 18.35 5.65 A 2 2 0 0 1 18.35 18.35" />
      <path d="M 12.00 3.01 A 2 2 0 0 0 12.00 20.99" />
      <path d="M 12.00 3.01 A 2 2 0 0 1 12.00 20.99" />
      <path d="M 5.65 5.65 A 2 2 0 0 0 5.65 18.35" />
      <path d="M 5.65 5.65 A 2 2 0 0 1 5.65 18.35" />
      {children}
    </svg>
  );
});

export default EchoGirl;
