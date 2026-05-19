import React from 'react';

export const iconData = {
  "id": "TensoCookie",
  "name": "TensoCookie",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.31 21.42 L 9.05 16.87 L 2.58 14.31 L 7.13 9.05 L 9.69 2.58 L 14.95 7.13 L 21.42 9.69 L 16.87 14.95 Z"
      }
    ]
  ]
};

export const TensoCookie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.31 21.42 L 9.05 16.87 L 2.58 14.31 L 7.13 9.05 L 9.69 2.58 L 14.95 7.13 L 21.42 9.69 L 16.87 14.95 Z" />
      {children}
    </svg>
  );
});

export default TensoCookie;
