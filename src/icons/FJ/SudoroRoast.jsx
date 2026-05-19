import React from 'react';

export const iconData = {
  "id": "SudoroRoast",
  "name": "SudoroRoast",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.65 11.09 9.77 7.20 Q 9.62 5.58 9.48 3.95 Q 10.46 5.93 11.45 7.90 Q 11.55 5.52 11.65 3.14 Q 12.22 7.04 12.79 10.94 Q 13.88 10.62 14.96 10.29 Q 16.85 13.44 18.75 16.58 Q 11.14 15.78 3.53 14.99 Z"
      }
    ]
  ]
};

export const SudoroRoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.65 11.09 9.77 7.20 Q 9.62 5.58 9.48 3.95 Q 10.46 5.93 11.45 7.90 Q 11.55 5.52 11.65 3.14 Q 12.22 7.04 12.79 10.94 Q 13.88 10.62 14.96 10.29 Q 16.85 13.44 18.75 16.58 Q 11.14 15.78 3.53 14.99 Z" />
      {children}
    </svg>
  );
});

export default SudoroRoast;
