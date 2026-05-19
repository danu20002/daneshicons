import React from 'react';

export const iconData = {
  "id": "SpiriCradle",
  "name": "SpiriCradle",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.51 2.77 L 14.70 10.18 L 22.25 11.29 L 14.92 13.43 L 17.74 20.52 L 12.23 15.24 L 7.49 21.23 L 9.30 13.82 L 1.75 12.71 L 9.08 10.57 L 6.26 3.48 L 11.77 8.76 Z"
      }
    ]
  ]
};

export const SpiriCradle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.51 2.77 L 14.70 10.18 L 22.25 11.29 L 14.92 13.43 L 17.74 20.52 L 12.23 15.24 L 7.49 21.23 L 9.30 13.82 L 1.75 12.71 L 9.08 10.57 L 6.26 3.48 L 11.77 8.76 Z" />
      {children}
    </svg>
  );
});

export default SpiriCradle;
