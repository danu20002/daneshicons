import React from 'react';

export const iconData = {
  "id": "VeneroPerson",
  "name": "VeneroPerson",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 6.06 L 20.29 6.06 L 20.29 17.94 L 3.71 17.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 6.06 L 8.12 1.65 L 24.70 1.65 L 20.29 6.06"
      }
    ],
    [
      "path",
      {
        "d": "M 20.29 6.06 L 24.70 1.65 L 24.70 13.53 L 20.29 17.94"
      }
    ]
  ]
};

export const VeneroPerson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 6.06 L 20.29 6.06 L 20.29 17.94 L 3.71 17.94 Z" />
      <path d="M 3.71 6.06 L 8.12 1.65 L 24.70 1.65 L 20.29 6.06" />
      <path d="M 20.29 6.06 L 24.70 1.65 L 24.70 13.53 L 20.29 17.94" />
      {children}
    </svg>
  );
});

export default VeneroPerson;
