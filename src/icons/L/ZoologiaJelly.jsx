import React from 'react';

export const iconData = {
  "id": "ZoologiaJelly",
  "name": "ZoologiaJelly",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.67 6.91 L 11.67 6.91"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 6.31 L 16.74 10.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.49 13.57 L 15.26 15.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.51 18.66 L 9.28 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 14.54 L 7.06 10.74"
      }
    ]
  ]
};

export const ZoologiaJelly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.67 6.91 L 11.67 6.91" />
      <path d="M 15.50 6.31 L 16.74 10.12" />
      <path d="M 18.49 13.57 L 15.26 15.92" />
      <path d="M 12.51 18.66 L 9.28 16.31" />
      <path d="M 5.82 14.54 L 7.06 10.74" />
      {children}
    </svg>
  );
});

export default ZoologiaJelly;
