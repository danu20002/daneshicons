import React from 'react';

export const iconData = {
  "id": "SphingoExit",
  "name": "SphingoExit",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.44 10.48 10.77 3.74 Q 13.86 5.15 16.94 6.56 Q 15.63 8.42 14.32 10.29 Q 17.29 9.56 20.25 8.83 Q 16.23 10.42 12.20 12.00 Q 13.15 14.61 14.10 17.21 Z"
      }
    ]
  ]
};

export const SphingoExit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.44 10.48 10.77 3.74 Q 13.86 5.15 16.94 6.56 Q 15.63 8.42 14.32 10.29 Q 17.29 9.56 20.25 8.83 Q 16.23 10.42 12.20 12.00 Q 13.15 14.61 14.10 17.21 Z" />
      {children}
    </svg>
  );
});

export default SphingoExit;
