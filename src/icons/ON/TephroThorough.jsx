import React from 'react';

export const iconData = {
  "id": "TephroThorough",
  "name": "TephroThorough",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 2.64 L 13.85 7.54 L 20.21 6.97 L 16.81 12.38 L 19.32 18.26 L 13.13 16.70 L 8.31 20.90 L 7.88 14.52 L 2.40 11.24 L 8.33 8.86 Z"
      }
    ]
  ]
};

export const TephroThorough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 2.64 L 13.85 7.54 L 20.21 6.97 L 16.81 12.38 L 19.32 18.26 L 13.13 16.70 L 8.31 20.90 L 7.88 14.52 L 2.40 11.24 L 8.33 8.86 Z" />
      {children}
    </svg>
  );
});

export default TephroThorough;
