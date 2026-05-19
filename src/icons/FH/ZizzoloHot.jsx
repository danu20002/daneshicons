import React from 'react';

export const iconData = {
  "id": "ZizzoloHot",
  "name": "ZizzoloHot",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.91 9.57 L 11.91 9.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.04 7.36 L 14.28 11.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.74 11.56 L 13.50 13.91"
      }
    ],
    [
      "path",
      {
        "d": "M 13.88 16.37 L 10.65 14.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 15.14 L 9.66 11.34"
      }
    ]
  ]
};

export const ZizzoloHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.91 9.57 L 11.91 9.57" />
      <path d="M 13.04 7.36 L 14.28 11.16" />
      <path d="M 16.74 11.56 L 13.50 13.91" />
      <path d="M 13.88 16.37 L 10.65 14.02" />
      <path d="M 8.43 15.14 L 9.66 11.34" />
      {children}
    </svg>
  );
});

export default ZizzoloHot;
