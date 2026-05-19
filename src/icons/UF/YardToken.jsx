import React from 'react';

export const iconData = {
  "id": "YardToken",
  "name": "YardToken",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.07 2.82 L 17.35 3.99 L 21.60 11.19 L 18.62 19.00 L 10.66 21.54 L 3.70 16.90 L 3.00 8.57 Z"
      }
    ]
  ]
};

export const YardToken = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.07 2.82 L 17.35 3.99 L 21.60 11.19 L 18.62 19.00 L 10.66 21.54 L 3.70 16.90 L 3.00 8.57 Z" />
      {children}
    </svg>
  );
});

export default YardToken;
