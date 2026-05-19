import React from 'react';

export const iconData = {
  "id": "YardExist",
  "name": "YardExist",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.12 3.06 L 14.50 7.90 L 22.18 12.25 L 14.30 16.22 L 6.70 20.69 L 7.20 11.88 Z"
      }
    ]
  ]
};

export const YardExist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.12 3.06 L 14.50 7.90 L 22.18 12.25 L 14.30 16.22 L 6.70 20.69 L 7.20 11.88 Z" />
      {children}
    </svg>
  );
});

export default YardExist;
