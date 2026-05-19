import React from 'react';

export const iconData = {
  "id": "DiabloStack",
  "name": "DiabloStack",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 13.82 L 4.97 6.11 L 12.22 2.83 L 19.31 6.46 L 20.89 14.26 L 15.78 20.36 L 7.82 20.16 Z"
      }
    ]
  ]
};

export const DiabloStack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 13.82 L 4.97 6.11 L 12.22 2.83 L 19.31 6.46 L 20.89 14.26 L 15.78 20.36 L 7.82 20.16 Z" />
      {children}
    </svg>
  );
});

export default DiabloStack;
