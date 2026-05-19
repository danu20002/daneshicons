import React from 'react';

export const iconData = {
  "id": "TuffoNext",
  "name": "TuffoNext",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.71 9.17 L 16.50 12.96 L 18.80 18.13 L 13.42 16.38 L 10.09 20.96 L 8.92 15.42 L 3.29 14.83 L 7.50 11.04 L 5.20 5.87 L 10.58 7.62 L 13.91 3.04 L 15.08 8.58 Z"
      }
    ]
  ]
};

export const TuffoNext = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.71 9.17 L 16.50 12.96 L 18.80 18.13 L 13.42 16.38 L 10.09 20.96 L 8.92 15.42 L 3.29 14.83 L 7.50 11.04 L 5.20 5.87 L 10.58 7.62 L 13.91 3.04 L 15.08 8.58 Z" />
      {children}
    </svg>
  );
});

export default TuffoNext;
