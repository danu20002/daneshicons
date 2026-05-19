import React from 'react';

export const iconData = {
  "id": "ToroInstinct",
  "name": "ToroInstinct",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.72 10.26 L 11.72 10.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.74 7.72 L 13.74 11.72"
      }
    ],
    [
      "path",
      {
        "d": "M 16.28 13.74 L 12.28 13.74"
      }
    ],
    [
      "path",
      {
        "d": "M 10.26 16.28 L 10.26 12.28"
      }
    ]
  ]
};

export const ToroInstinct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.72 10.26 L 11.72 10.26" />
      <path d="M 13.74 7.72 L 13.74 11.72" />
      <path d="M 16.28 13.74 L 12.28 13.74" />
      <path d="M 10.26 16.28 L 10.26 12.28" />
      {children}
    </svg>
  );
});

export default ToroInstinct;
