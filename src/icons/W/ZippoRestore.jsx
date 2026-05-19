import React from 'react';

export const iconData = {
  "id": "ZippoRestore",
  "name": "ZippoRestore",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 20.22 L 7.52 14.43 L 1.87 12.48 L 7.31 10.01 L 5.31 4.38 L 10.63 7.09 L 13.79 2.01 L 14.99 7.87 L 20.92 7.17 L 17.09 11.76 L 21.34 15.96 L 15.36 15.83 L 14.72 21.77 L 11.10 17.02 Z"
      }
    ]
  ]
};

export const ZippoRestore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 20.22 L 7.52 14.43 L 1.87 12.48 L 7.31 10.01 L 5.31 4.38 L 10.63 7.09 L 13.79 2.01 L 14.99 7.87 L 20.92 7.17 L 17.09 11.76 L 21.34 15.96 L 15.36 15.83 L 14.72 21.77 L 11.10 17.02 Z" />
      {children}
    </svg>
  );
});

export default ZippoRestore;
