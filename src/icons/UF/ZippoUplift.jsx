import React from 'react';

export const iconData = {
  "id": "ZippoUplift",
  "name": "ZippoUplift",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.87 6.58 L 20.63 16.11 L 12.76 21.53 L 4.13 17.42 L 3.37 7.89 L 11.24 2.47 Z"
      }
    ]
  ]
};

export const ZippoUplift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.87 6.58 L 20.63 16.11 L 12.76 21.53 L 4.13 17.42 L 3.37 7.89 L 11.24 2.47 Z" />
      {children}
    </svg>
  );
});

export default ZippoUplift;
