import React from 'react';

export const iconData = {
  "id": "ExtraStall",
  "name": "ExtraStall",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.10 7.17 L 9.48 6.72 L 13.84 2.05 L 16.24 7.97 L 22.04 10.67 L 17.14 14.79 L 16.36 21.13 L 10.94 17.75 L 4.66 18.97 L 6.20 12.77 Z"
      }
    ]
  ]
};

export const ExtraStall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.10 7.17 L 9.48 6.72 L 13.84 2.05 L 16.24 7.97 L 22.04 10.67 L 17.14 14.79 L 16.36 21.13 L 10.94 17.75 L 4.66 18.97 L 6.20 12.77 Z" />
      {children}
    </svg>
  );
});

export default ExtraStall;
