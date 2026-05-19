import React from 'react';

export const iconData = {
  "id": "TroncoPlank",
  "name": "TroncoPlank",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.40 10.23 17.49 3.49 Q 16.79 8.90 16.10 14.31 Q 14.48 17.64 12.86 20.98 Q 10.09 18.97 7.32 16.97 Z"
      }
    ]
  ]
};

export const TroncoPlank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.40 10.23 17.49 3.49 Q 16.79 8.90 16.10 14.31 Q 14.48 17.64 12.86 20.98 Q 10.09 18.97 7.32 16.97 Z" />
      {children}
    </svg>
  );
});

export default TroncoPlank;
