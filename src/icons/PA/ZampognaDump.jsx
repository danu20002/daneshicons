import React from 'react';

export const iconData = {
  "id": "ZampognaDump",
  "name": "ZampognaDump",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 5.43 L 19.26 5.43 L 19.26 18.57 L 4.74 18.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.43 L 9.46 0.72 L 23.97 0.72 L 19.26 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.43 L 23.97 0.72 L 23.97 13.86 L 19.26 18.57"
      }
    ]
  ]
};

export const ZampognaDump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 5.43 L 19.26 5.43 L 19.26 18.57 L 4.74 18.57 Z" />
      <path d="M 4.74 5.43 L 9.46 0.72 L 23.97 0.72 L 19.26 5.43" />
      <path d="M 19.26 5.43 L 23.97 0.72 L 23.97 13.86 L 19.26 18.57" />
      {children}
    </svg>
  );
});

export default ZampognaDump;
