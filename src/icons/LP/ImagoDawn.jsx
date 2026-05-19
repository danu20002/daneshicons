import React from 'react';

export const iconData = {
  "id": "ImagoDawn",
  "name": "ImagoDawn",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.09 11.58 L 7.12 8.92 L 6.90 2.34 L 12.22 6.23 L 17.82 2.76 L 17.11 9.31 L 22.91 12.42 L 16.88 15.08 L 17.10 21.66 L 11.78 17.77 L 6.18 21.24 L 6.89 14.69 Z"
      }
    ]
  ]
};

export const ImagoDawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.09 11.58 L 7.12 8.92 L 6.90 2.34 L 12.22 6.23 L 17.82 2.76 L 17.11 9.31 L 22.91 12.42 L 16.88 15.08 L 17.10 21.66 L 11.78 17.77 L 6.18 21.24 L 6.89 14.69 Z" />
      {children}
    </svg>
  );
});

export default ImagoDawn;
