import React from 'react';

export const iconData = {
  "id": "MiniSucceed",
  "name": "MiniSucceed",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.24 7.43 L 14.24 7.43"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 10.24 L 16.57 14.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.76 16.57 L 9.76 16.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 13.76 L 7.43 9.76"
      }
    ]
  ]
};

export const MiniSucceed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.24 7.43 L 14.24 7.43" />
      <path d="M 16.57 10.24 L 16.57 14.24" />
      <path d="M 13.76 16.57 L 9.76 16.57" />
      <path d="M 7.43 13.76 L 7.43 9.76" />
      {children}
    </svg>
  );
});

export default MiniSucceed;
