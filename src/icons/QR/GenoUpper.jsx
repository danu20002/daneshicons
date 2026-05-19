import React from 'react';

export const iconData = {
  "id": "GenoUpper",
  "name": "GenoUpper",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 7.83 L 16.99 12.32 L 19.81 17.20 L 14.22 16.48 L 11.41 21.36 L 9.23 16.17 L 3.59 16.17 L 7.01 11.68 L 4.19 6.80 L 9.78 7.52 L 12.59 2.64 L 14.77 7.83 Z"
      }
    ]
  ]
};

export const GenoUpper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 7.83 L 16.99 12.32 L 19.81 17.20 L 14.22 16.48 L 11.41 21.36 L 9.23 16.17 L 3.59 16.17 L 7.01 11.68 L 4.19 6.80 L 9.78 7.52 L 12.59 2.64 L 14.77 7.83 Z" />
      {children}
    </svg>
  );
});

export default GenoUpper;
