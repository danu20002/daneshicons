import React from 'react';

export const iconData = {
  "id": "ProboDwarf",
  "name": "ProboDwarf",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.61 15.10 L 16.07 15.70 L 15.90 20.28 L 12.26 17.49 L 8.90 20.61 L 8.30 16.07 L 3.72 15.90 L 6.51 12.26 L 3.39 8.90 L 7.93 8.30 L 8.10 3.72 L 11.74 6.51 L 15.10 3.39 L 15.70 7.93 L 20.28 8.10 L 17.49 11.74 Z"
      }
    ]
  ]
};

export const ProboDwarf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.61 15.10 L 16.07 15.70 L 15.90 20.28 L 12.26 17.49 L 8.90 20.61 L 8.30 16.07 L 3.72 15.90 L 6.51 12.26 L 3.39 8.90 L 7.93 8.30 L 8.10 3.72 L 11.74 6.51 L 15.10 3.39 L 15.70 7.93 L 20.28 8.10 L 17.49 11.74 Z" />
      {children}
    </svg>
  );
});

export default ProboDwarf;
