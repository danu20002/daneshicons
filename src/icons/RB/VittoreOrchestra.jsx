import React from 'react';

export const iconData = {
  "id": "VittoreOrchestra",
  "name": "VittoreOrchestra",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.43 12.32 L 14.61 21.07 L 4.18 17.28 L 4.56 6.19 L 15.22 3.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 14.14 L 11.82 18.36 L 5.89 13.79 L 8.41 6.75 L 15.89 6.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.46 13.93 L 10.92 14.93 L 8.88 11.88 L 11.15 8.99 L 14.60 10.26 Z"
      }
    ]
  ]
};

export const VittoreOrchestra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.43 12.32 L 14.61 21.07 L 4.18 17.28 L 4.56 6.19 L 15.22 3.13 Z" />
      <path d="M 17.99 14.14 L 11.82 18.36 L 5.89 13.79 L 8.41 6.75 L 15.89 6.96 Z" />
      <path d="M 14.46 13.93 L 10.92 14.93 L 8.88 11.88 L 11.15 8.99 L 14.60 10.26 Z" />
      {children}
    </svg>
  );
});

export default VittoreOrchestra;
