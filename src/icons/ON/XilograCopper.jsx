import React from 'react';

export const iconData = {
  "id": "XilograCopper",
  "name": "XilograCopper",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.19 11.77 L 14.69 13.47 L 17.30 20.71 L 12.07 15.06 L 7.10 20.94 L 9.38 13.59 L 1.81 12.23 L 9.31 10.53 L 6.70 3.29 L 11.93 8.94 L 16.90 3.06 L 14.62 10.41 Z"
      }
    ]
  ]
};

export const XilograCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.19 11.77 L 14.69 13.47 L 17.30 20.71 L 12.07 15.06 L 7.10 20.94 L 9.38 13.59 L 1.81 12.23 L 9.31 10.53 L 6.70 3.29 L 11.93 8.94 L 16.90 3.06 L 14.62 10.41 Z" />
      {children}
    </svg>
  );
});

export default XilograCopper;
