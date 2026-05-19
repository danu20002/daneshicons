import React from 'react';

export const iconData = {
  "id": "UrgenteEdge",
  "name": "UrgenteEdge",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.79 11.40 L 11.79 11.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.60 7.79 L 12.60 11.79"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 12.60 L 12.21 12.60"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 16.21 L 11.40 12.21"
      }
    ]
  ]
};

export const UrgenteEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.79 11.40 L 11.79 11.40" />
      <path d="M 12.60 7.79 L 12.60 11.79" />
      <path d="M 16.21 12.60 L 12.21 12.60" />
      <path d="M 11.40 16.21 L 11.40 12.21" />
      {children}
    </svg>
  );
});

export default UrgenteEdge;
