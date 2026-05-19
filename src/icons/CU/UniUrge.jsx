import React from 'react';

export const iconData = {
  "id": "UniUrge",
  "name": "UniUrge",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.59 2.20 L 14.61 9.88 L 22.52 9.48 L 15.29 12.71 L 20.53 18.65 L 13.49 15.01 L 12.11 22.82 L 10.57 15.04 L 3.61 18.83 L 8.73 12.78 L 1.43 9.70 L 9.35 9.93 L 7.20 2.30 L 11.96 8.64 Z"
      }
    ]
  ]
};

export const UniUrge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.59 2.20 L 14.61 9.88 L 22.52 9.48 L 15.29 12.71 L 20.53 18.65 L 13.49 15.01 L 12.11 22.82 L 10.57 15.04 L 3.61 18.83 L 8.73 12.78 L 1.43 9.70 L 9.35 9.93 L 7.20 2.30 L 11.96 8.64 Z" />
      {children}
    </svg>
  );
});

export default UniUrge;
