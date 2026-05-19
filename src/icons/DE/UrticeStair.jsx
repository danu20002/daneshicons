import React from 'react';

export const iconData = {
  "id": "UrticeStair",
  "name": "UrticeStair",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.46 12.48 12.83 10.01 Q 14.86 10.32 16.90 10.62 Q 18.29 12.05 19.68 13.48 Q 13.88 14.21 8.08 14.94 Z"
      }
    ]
  ]
};

export const UrticeStair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.46 12.48 12.83 10.01 Q 14.86 10.32 16.90 10.62 Q 18.29 12.05 19.68 13.48 Q 13.88 14.21 8.08 14.94 Z" />
      {children}
    </svg>
  );
});

export default UrticeStair;
