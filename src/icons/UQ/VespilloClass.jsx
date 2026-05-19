import React from 'react';

export const iconData = {
  "id": "VespilloClass",
  "name": "VespilloClass",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.33 7.50 L 13.33 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 9.33 L 16.50 13.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.67 16.50 L 10.67 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 14.67 L 7.50 10.67"
      }
    ]
  ]
};

export const VespilloClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.33 7.50 L 13.33 7.50" />
      <path d="M 16.50 9.33 L 16.50 13.33" />
      <path d="M 14.67 16.50 L 10.67 16.50" />
      <path d="M 7.50 14.67 L 7.50 10.67" />
      {children}
    </svg>
  );
});

export default VespilloClass;
