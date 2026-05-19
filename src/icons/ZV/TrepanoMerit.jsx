import React from 'react';

export const iconData = {
  "id": "TrepanoMerit",
  "name": "TrepanoMerit",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.54 13.84 8.45 11.98 Q 5.74 7.85 3.04 3.71 Q 11.78 4.10 20.52 4.49 Q 18.93 7.67 17.35 10.86 Q 17.58 14.58 17.81 18.31 Q 16.22 17.00 14.64 15.69 Z"
      }
    ]
  ]
};

export const TrepanoMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.54 13.84 8.45 11.98 Q 5.74 7.85 3.04 3.71 Q 11.78 4.10 20.52 4.49 Q 18.93 7.67 17.35 10.86 Q 17.58 14.58 17.81 18.31 Q 16.22 17.00 14.64 15.69 Z" />
      {children}
    </svg>
  );
});

export default TrepanoMerit;
