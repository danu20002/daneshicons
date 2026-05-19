import React from 'react';

export const iconData = {
  "id": "PachyShrimp",
  "name": "PachyShrimp",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 9.39 4.45 3.85 Q 10.30 3.83 16.14 3.81 Q 15.71 5.82 15.29 7.82 Q 16.68 11.55 18.07 15.27 Q 17.04 14.79 16.01 14.30 Q 10.73 17.54 5.45 20.78 Q 6.33 17.73 7.21 14.68 Q 5.54 14.81 3.86 14.93 Z"
      }
    ]
  ]
};

export const PachyShrimp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 9.39 4.45 3.85 Q 10.30 3.83 16.14 3.81 Q 15.71 5.82 15.29 7.82 Q 16.68 11.55 18.07 15.27 Q 17.04 14.79 16.01 14.30 Q 10.73 17.54 5.45 20.78 Q 6.33 17.73 7.21 14.68 Q 5.54 14.81 3.86 14.93 Z" />
      {children}
    </svg>
  );
});

export default PachyShrimp;
