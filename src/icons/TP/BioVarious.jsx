import React from 'react';

export const iconData = {
  "id": "BioVarious",
  "name": "BioVarious",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.23 12.15 L 8.20 10.23 L 5.17 3.67 L 11.01 7.93 L 14.25 1.47 L 14.57 8.69 L 21.64 7.19 L 16.19 11.94 L 21.77 16.54 L 14.66 15.24 L 14.54 22.47 L 11.12 16.10 L 5.40 20.51 L 8.25 13.87 Z"
      }
    ]
  ]
};

export const BioVarious = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.23 12.15 L 8.20 10.23 L 5.17 3.67 L 11.01 7.93 L 14.25 1.47 L 14.57 8.69 L 21.64 7.19 L 16.19 11.94 L 21.77 16.54 L 14.66 15.24 L 14.54 22.47 L 11.12 16.10 L 5.40 20.51 L 8.25 13.87 Z" />
      {children}
    </svg>
  );
});

export default BioVarious;
