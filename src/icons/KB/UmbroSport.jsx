import React from 'react';

export const iconData = {
  "id": "UmbroSport",
  "name": "UmbroSport",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.70 7.57 L 19.69 16.45 L 11.99 20.88 L 4.30 16.43 L 4.31 7.55 L 12.01 3.12 Z"
      }
    ]
  ]
};

export const UmbroSport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.70 7.57 L 19.69 16.45 L 11.99 20.88 L 4.30 16.43 L 4.31 7.55 L 12.01 3.12 Z" />
      {children}
    </svg>
  );
});

export default UmbroSport;
