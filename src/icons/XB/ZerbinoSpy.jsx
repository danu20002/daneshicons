import React from 'react';

export const iconData = {
  "id": "ZerbinoSpy",
  "name": "ZerbinoSpy",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 5.00 L 19.96 5.00 L 19.96 19.00 L 4.04 19.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 5.00 L 7.17 1.88 L 23.08 1.88 L 19.96 5.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 5.00 L 23.08 1.88 L 23.08 15.87 L 19.96 19.00"
      }
    ]
  ]
};

export const ZerbinoSpy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 5.00 L 19.96 5.00 L 19.96 19.00 L 4.04 19.00 Z" />
      <path d="M 4.04 5.00 L 7.17 1.88 L 23.08 1.88 L 19.96 5.00" />
      <path d="M 19.96 5.00 L 23.08 1.88 L 23.08 15.87 L 19.96 19.00" />
      {children}
    </svg>
  );
});

export default ZerbinoSpy;
