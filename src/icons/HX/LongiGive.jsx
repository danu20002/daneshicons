import React from 'react';

export const iconData = {
  "id": "LongiGive",
  "name": "LongiGive",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 21.92 L 9.41 14.44 L 1.87 15.21 L 8.48 11.50 L 3.17 6.08 L 10.20 8.93 L 11.13 1.41 L 13.28 8.68 L 19.74 4.71 L 15.39 10.93 L 22.52 13.51 L 14.96 13.98 L 17.38 21.16 L 12.29 15.55 Z"
      }
    ]
  ]
};

export const LongiGive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 21.92 L 9.41 14.44 L 1.87 15.21 L 8.48 11.50 L 3.17 6.08 L 10.20 8.93 L 11.13 1.41 L 13.28 8.68 L 19.74 4.71 L 15.39 10.93 L 22.52 13.51 L 14.96 13.98 L 17.38 21.16 L 12.29 15.55 Z" />
      {children}
    </svg>
  );
});

export default LongiGive;
