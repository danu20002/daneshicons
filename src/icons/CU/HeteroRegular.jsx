import React from 'react';

export const iconData = {
  "id": "HeteroRegular",
  "name": "HeteroRegular",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.61 1.89 L 14.99 8.46 L 21.53 7.73 L 16.63 12.13 L 21.28 16.79 L 14.78 15.70 L 14.04 22.24 L 10.84 16.48 L 5.26 19.98 L 7.78 13.89 L 1.56 11.71 L 7.89 9.88 L 5.72 3.65 L 11.10 7.46 Z"
      }
    ]
  ]
};

export const HeteroRegular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.61 1.89 L 14.99 8.46 L 21.53 7.73 L 16.63 12.13 L 21.28 16.79 L 14.78 15.70 L 14.04 22.24 L 10.84 16.48 L 5.26 19.98 L 7.78 13.89 L 1.56 11.71 L 7.89 9.88 L 5.72 3.65 L 11.10 7.46 Z" />
      {children}
    </svg>
  );
});

export default HeteroRegular;
