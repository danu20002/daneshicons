import React from 'react';

export const iconData = {
  "id": "RenoNovel",
  "name": "RenoNovel",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.00 12.30 17.29 10.03 Q 15.44 10.96 13.59 11.89 Q 13.41 13.49 13.23 15.08 Q 12.97 14.83 12.71 14.57 Z"
      }
    ]
  ]
};

export const RenoNovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.00 12.30 17.29 10.03 Q 15.44 10.96 13.59 11.89 Q 13.41 13.49 13.23 15.08 Q 12.97 14.83 12.71 14.57 Z" />
      {children}
    </svg>
  );
});

export default RenoNovel;
