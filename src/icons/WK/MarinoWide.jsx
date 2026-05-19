import React from 'react';

export const iconData = {
  "id": "MarinoWide",
  "name": "MarinoWide",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.63 17.41 L 9.21 20.93 L 2.64 12.11 L 9.00 3.13 L 19.51 6.41 Z"
      }
    ]
  ]
};

export const MarinoWide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.63 17.41 L 9.21 20.93 L 2.64 12.11 L 9.00 3.13 L 19.51 6.41 Z" />
      {children}
    </svg>
  );
});

export default MarinoWide;
