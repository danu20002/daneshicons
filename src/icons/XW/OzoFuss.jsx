import React from 'react';

export const iconData = {
  "id": "OzoFuss",
  "name": "OzoFuss",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.59 4.61 L 14.41 3.16 L 20.41 8.37 L 20.08 16.31 L 13.67 21.01 L 6.00 18.92 L 2.85 11.62 Z"
      }
    ]
  ]
};

export const OzoFuss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.59 4.61 L 14.41 3.16 L 20.41 8.37 L 20.08 16.31 L 13.67 21.01 L 6.00 18.92 L 2.85 11.62 Z" />
      {children}
    </svg>
  );
});

export default OzoFuss;
