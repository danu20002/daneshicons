import React from 'react';

export const iconData = {
  "id": "VasajoElect",
  "name": "VasajoElect",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.16 11.49 L 8.49 9.75 L 7.02 2.36 L 12.20 7.83 L 17.86 2.86 L 15.71 10.09 L 22.84 12.51 L 15.51 14.25 L 16.98 21.64 L 11.80 16.17 L 6.14 21.14 L 8.29 13.91 Z"
      }
    ]
  ]
};

export const VasajoElect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.16 11.49 L 8.49 9.75 L 7.02 2.36 L 12.20 7.83 L 17.86 2.86 L 15.71 10.09 L 22.84 12.51 L 15.51 14.25 L 16.98 21.64 L 11.80 16.17 L 6.14 21.14 L 8.29 13.91 Z" />
      {children}
    </svg>
  );
});

export default VasajoElect;
