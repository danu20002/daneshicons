import React from 'react';

export const iconData = {
  "id": "ZombiSign",
  "name": "ZombiSign",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 6.04 L 10.44 8.48 L 13.08 1.95 L 14.27 8.89 L 21.24 7.91 L 15.83 12.41 L 20.16 17.96 L 13.56 15.52 L 10.92 22.05 L 9.73 15.11 L 2.76 16.09 L 8.17 11.59 Z"
      }
    ]
  ]
};

export const ZombiSign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 6.04 L 10.44 8.48 L 13.08 1.95 L 14.27 8.89 L 21.24 7.91 L 15.83 12.41 L 20.16 17.96 L 13.56 15.52 L 10.92 22.05 L 9.73 15.11 L 2.76 16.09 L 8.17 11.59 Z" />
      {children}
    </svg>
  );
});

export default ZombiSign;
