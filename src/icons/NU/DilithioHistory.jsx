import React from 'react';

export const iconData = {
  "id": "DilithioHistory",
  "name": "DilithioHistory",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.12 19.60 L 8.17 12.83 L 4.40 7.12 L 11.17 8.17 L 16.88 4.40 L 15.83 11.17 L 19.60 16.88 L 12.83 15.83 Z"
      }
    ]
  ]
};

export const DilithioHistory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.12 19.60 L 8.17 12.83 L 4.40 7.12 L 11.17 8.17 L 16.88 4.40 L 15.83 11.17 L 19.60 16.88 L 12.83 15.83 Z" />
      {children}
    </svg>
  );
});

export default DilithioHistory;
