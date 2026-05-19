import React from 'react';

export const iconData = {
  "id": "ColoThief",
  "name": "ColoThief",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.74 10.78 L 21.23 18.36"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 2.95 C 5.73 4.82, 21.08 7.73, 8.94 3.41"
      }
    ]
  ]
};

export const ColoThief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.74 10.78 L 21.23 18.36" />
      <path d="M 16.52 2.95 C 5.73 4.82, 21.08 7.73, 8.94 3.41" />
      {children}
    </svg>
  );
});

export default ColoThief;
