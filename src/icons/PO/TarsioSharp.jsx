import React from 'react';

export const iconData = {
  "id": "TarsioSharp",
  "name": "TarsioSharp",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.66 4.29 L 16.56 14.41 L 4.65 11.83 L 21.34 20.55 L 9.23 7.88 L 5.67 15.58 L 8.87 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 6.72 C 9.72 16.84, 18.73 3.31, 4.78 13.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 19.32 L 13.01 19.81"
      }
    ],
    [
      "path",
      {
        "d": "M 13.55 9.55 Q 5.44 13.55 3.91 8.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.68 10.83 L 8.96 6.95"
      }
    ]
  ]
};

export const TarsioSharp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.66 4.29 L 16.56 14.41 L 4.65 11.83 L 21.34 20.55 L 9.23 7.88 L 5.67 15.58 L 8.87 15.98" />
      <path d="M 6.78 6.72 C 9.72 16.84, 18.73 3.31, 4.78 13.50" />
      <path d="M 14.23 19.32 L 13.01 19.81" />
      <path d="M 13.55 9.55 Q 5.44 13.55 3.91 8.60" />
      <path d="M 15.68 10.83 L 8.96 6.95" />
      {children}
    </svg>
  );
});

export default TarsioSharp;
