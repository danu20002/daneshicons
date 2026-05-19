import React from 'react';

export const iconData = {
  "id": "UnivocoCask",
  "name": "UnivocoCask",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.71 2.25 L 13.87 8.54 L 20.87 7.76 L 15.87 12.71 L 18.77 19.13 L 12.52 15.90 L 7.31 20.64 L 8.45 13.70 L 2.33 10.21 L 9.29 9.15 Z"
      }
    ]
  ]
};

export const UnivocoCask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.71 2.25 L 13.87 8.54 L 20.87 7.76 L 15.87 12.71 L 18.77 19.13 L 12.52 15.90 L 7.31 20.64 L 8.45 13.70 L 2.33 10.21 L 9.29 9.15 Z" />
      {children}
    </svg>
  );
});

export default UnivocoCask;
