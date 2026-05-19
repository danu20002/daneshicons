import React from 'react';

export const iconData = {
  "id": "ZampognaDepict",
  "name": "ZampognaDepict",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.23 L 19.29 5.23 L 19.29 18.77 L 4.71 18.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.23 L 9.37 0.57 L 23.94 0.57 L 19.29 5.23"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.23 L 23.94 0.57 L 23.94 14.12 L 19.29 18.77"
      }
    ]
  ]
};

export const ZampognaDepict = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.23 L 19.29 5.23 L 19.29 18.77 L 4.71 18.77 Z" />
      <path d="M 4.71 5.23 L 9.37 0.57 L 23.94 0.57 L 19.29 5.23" />
      <path d="M 19.29 5.23 L 23.94 0.57 L 23.94 14.12 L 19.29 18.77" />
      {children}
    </svg>
  );
});

export default ZampognaDepict;
