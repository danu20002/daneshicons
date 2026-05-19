import React from 'react';

export const iconData = {
  "id": "BrakeSomber",
  "name": "BrakeSomber",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.53 8.51 L 19.79 14.86 L 15.49 19.53 L 9.14 19.79 L 4.47 15.49 L 4.21 9.14 L 8.51 4.47 L 14.86 4.21 Z"
      }
    ]
  ]
};

export const BrakeSomber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.53 8.51 L 19.79 14.86 L 15.49 19.53 L 9.14 19.79 L 4.47 15.49 L 4.21 9.14 L 8.51 4.47 L 14.86 4.21 Z" />
      {children}
    </svg>
  );
});

export default BrakeSomber;
