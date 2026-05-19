import React from 'react';

export const iconData = {
  "id": "QuatroSling",
  "name": "QuatroSling",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.18 7.46 L 16.10 11.73 L 21.70 15.28 L 15.09 14.71 L 16.54 21.18 L 12.27 16.10 L 8.72 21.70 L 9.29 15.09 L 2.82 16.54 L 7.90 12.27 L 2.30 8.72 L 8.91 9.29 L 7.46 2.82 L 11.73 7.90 L 15.28 2.30 L 14.71 8.91 Z"
      }
    ]
  ]
};

export const QuatroSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.18 7.46 L 16.10 11.73 L 21.70 15.28 L 15.09 14.71 L 16.54 21.18 L 12.27 16.10 L 8.72 21.70 L 9.29 15.09 L 2.82 16.54 L 7.90 12.27 L 2.30 8.72 L 8.91 9.29 L 7.46 2.82 L 11.73 7.90 L 15.28 2.30 L 14.71 8.91 Z" />
      {children}
    </svg>
  );
});

export default QuatroSling;
