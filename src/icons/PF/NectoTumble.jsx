import React from 'react';

export const iconData = {
  "id": "NectoTumble",
  "name": "NectoTumble",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.56 18.69 L 13.92 15.88 L 12.11 22.87 L 10.16 15.92 L 3.57 18.86 L 7.79 13.01 L 1.38 9.69 L 8.59 9.33 L 7.19 2.26 L 11.96 7.67 L 16.62 2.16 L 15.36 9.27 L 22.57 9.48 L 16.23 12.92 Z"
      }
    ]
  ]
};

export const NectoTumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.56 18.69 L 13.92 15.88 L 12.11 22.87 L 10.16 15.92 L 3.57 18.86 L 7.79 13.01 L 1.38 9.69 L 8.59 9.33 L 7.19 2.26 L 11.96 7.67 L 16.62 2.16 L 15.36 9.27 L 22.57 9.48 L 16.23 12.92 Z" />
      {children}
    </svg>
  );
});

export default NectoTumble;
