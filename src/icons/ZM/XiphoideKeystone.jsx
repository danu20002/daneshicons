import React from 'react';

export const iconData = {
  "id": "XiphoideKeystone",
  "name": "XiphoideKeystone",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 6.37 L 9.10 6.78 L 12.19 1.07 L 15.08 6.88 L 21.56 6.70 L 17.97 12.10 L 21.37 17.63 L 14.90 17.22 L 11.81 22.93 L 8.92 17.12 L 2.44 17.30 L 6.03 11.90 Z"
      }
    ]
  ]
};

export const XiphoideKeystone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 6.37 L 9.10 6.78 L 12.19 1.07 L 15.08 6.88 L 21.56 6.70 L 17.97 12.10 L 21.37 17.63 L 14.90 17.22 L 11.81 22.93 L 8.92 17.12 L 2.44 17.30 L 6.03 11.90 Z" />
      {children}
    </svg>
  );
});

export default XiphoideKeystone;
