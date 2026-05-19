import React from 'react';

export const iconData = {
  "id": "EchoOutset",
  "name": "EchoOutset",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 2.421407502936199 0 1 0 16.14 0 a 8.07 2.421407502936199 0 1 0 -16.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 5.01 A 2 2 0 0 0 16.04 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 5.01 A 2 2 0 0 1 16.04 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 5.01 A 2 2 0 0 0 7.96 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 5.01 A 2 2 0 0 1 7.96 18.99"
      }
    ]
  ]
};

export const EchoOutset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0" />
      <path d="M 3.93 12.00 a 8.07 2.421407502936199 0 1 0 16.14 0 a 8.07 2.421407502936199 0 1 0 -16.14 0" />
      <path d="M 16.04 5.01 A 2 2 0 0 0 16.04 18.99" />
      <path d="M 16.04 5.01 A 2 2 0 0 1 16.04 18.99" />
      <path d="M 7.96 5.01 A 2 2 0 0 0 7.96 18.99" />
      <path d="M 7.96 5.01 A 2 2 0 0 1 7.96 18.99" />
      {children}
    </svg>
  );
});

export default EchoOutset;
