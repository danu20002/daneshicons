import React from 'react';

export const iconData = {
  "id": "RenoHair",
  "name": "RenoHair",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 6.14 L 15.56 11.81 L 21.56 16.85 L 13.94 14.98 L 12.58 22.71 L 10.39 15.18 L 3.02 17.86 L 8.44 12.19 L 2.44 7.15 L 10.06 9.02 L 11.42 1.29 L 13.61 8.82 Z"
      }
    ]
  ]
};

export const RenoHair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 6.14 L 15.56 11.81 L 21.56 16.85 L 13.94 14.98 L 12.58 22.71 L 10.39 15.18 L 3.02 17.86 L 8.44 12.19 L 2.44 7.15 L 10.06 9.02 L 11.42 1.29 L 13.61 8.82 Z" />
      {children}
    </svg>
  );
});

export default RenoHair;
