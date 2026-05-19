import React from 'react';

export const iconData = {
  "id": "FernoUnlock",
  "name": "FernoUnlock",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.07 13.75 5.95 10.94 Q 12.96 7.33 19.96 3.71 Q 16.73 7.49 13.49 11.26 Q 16.11 12.77 18.72 14.27 Q 16.74 13.82 14.75 13.37 Q 14.99 13.79 15.24 14.20 Q 16.71 15.37 18.19 16.55 Z"
      }
    ]
  ]
};

export const FernoUnlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.07 13.75 5.95 10.94 Q 12.96 7.33 19.96 3.71 Q 16.73 7.49 13.49 11.26 Q 16.11 12.77 18.72 14.27 Q 16.74 13.82 14.75 13.37 Q 14.99 13.79 15.24 14.20 Q 16.71 15.37 18.19 16.55 Z" />
      {children}
    </svg>
  );
});

export default FernoUnlock;
