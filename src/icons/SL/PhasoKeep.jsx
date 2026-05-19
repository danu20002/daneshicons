import React from 'react';

export const iconData = {
  "id": "PhasoKeep",
  "name": "PhasoKeep",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.48 12.00 L 18.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.48 L 12.00 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 1.91 12.00 a 10.09 10.09 0 1 0 20.18 0 a 10.09 10.09 0 1 0 -20.18 0"
      }
    ]
  ]
};

export const PhasoKeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.48 12.00 L 18.52 12.00" />
      <path d="M 12.00 5.48 L 12.00 18.52" />
      <path d="M 1.91 12.00 a 10.09 10.09 0 1 0 20.18 0 a 10.09 10.09 0 1 0 -20.18 0" />
      {children}
    </svg>
  );
});

export default PhasoKeep;
