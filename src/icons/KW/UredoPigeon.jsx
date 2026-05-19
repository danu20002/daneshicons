import React from 'react';

export const iconData = {
  "id": "UredoPigeon",
  "name": "UredoPigeon",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.45 9.02 L 9.42 9.20 L 9.80 2.24 L 13.13 8.37 L 19.36 5.22 L 15.71 11.17 L 21.55 14.98 L 14.58 14.80 L 14.20 21.76 L 10.87 15.63 L 4.64 18.78 L 8.29 12.83 Z"
      }
    ]
  ]
};

export const UredoPigeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.45 9.02 L 9.42 9.20 L 9.80 2.24 L 13.13 8.37 L 19.36 5.22 L 15.71 11.17 L 21.55 14.98 L 14.58 14.80 L 14.20 21.76 L 10.87 15.63 L 4.64 18.78 L 8.29 12.83 Z" />
      {children}
    </svg>
  );
});

export default UredoPigeon;
