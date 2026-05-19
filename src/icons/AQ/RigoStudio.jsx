import React from 'react';

export const iconData = {
  "id": "RigoStudio",
  "name": "RigoStudio",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 1.98 L 14.04 7.35 L 20.85 6.81 L 17.05 12.50 L 19.67 18.82 L 13.09 16.96 L 7.89 21.40 L 7.62 14.57 L 1.79 10.99 L 8.21 8.63 Z"
      }
    ]
  ]
};

export const RigoStudio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 1.98 L 14.04 7.35 L 20.85 6.81 L 17.05 12.50 L 19.67 18.82 L 13.09 16.96 L 7.89 21.40 L 7.62 14.57 L 1.79 10.99 L 8.21 8.63 Z" />
      {children}
    </svg>
  );
});

export default RigoStudio;
