import React from 'react';

export const iconData = {
  "id": "FractoInsist",
  "name": "FractoInsist",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.98 19.11 L 4.13 14.19 L 4.89 7.98 L 9.81 4.13 L 16.02 4.89 L 19.87 9.81 L 19.11 16.02 L 14.19 19.87 Z"
      }
    ]
  ]
};

export const FractoInsist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.98 19.11 L 4.13 14.19 L 4.89 7.98 L 9.81 4.13 L 16.02 4.89 L 19.87 9.81 L 19.11 16.02 L 14.19 19.87 Z" />
      {children}
    </svg>
  );
});

export default FractoInsist;
