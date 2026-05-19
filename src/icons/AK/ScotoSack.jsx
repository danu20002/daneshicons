import React from 'react';

export const iconData = {
  "id": "ScotoSack",
  "name": "ScotoSack",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 6.66 L 19.80 6.66 L 19.80 17.34 L 4.20 17.34 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 6.66 L 8.16 2.70 L 23.76 2.70 L 19.80 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 6.66 L 23.76 2.70 L 23.76 13.38 L 19.80 17.34"
      }
    ]
  ]
};

export const ScotoSack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 6.66 L 19.80 6.66 L 19.80 17.34 L 4.20 17.34 Z" />
      <path d="M 4.20 6.66 L 8.16 2.70 L 23.76 2.70 L 19.80 6.66" />
      <path d="M 19.80 6.66 L 23.76 2.70 L 23.76 13.38 L 19.80 17.34" />
      {children}
    </svg>
  );
});

export default ScotoSack;
