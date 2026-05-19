import React from 'react';

export const iconData = {
  "id": "DuctoSoil",
  "name": "DuctoSoil",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.27 17.66 L 13.39 15.89 L 9.18 21.61 L 8.73 14.52 L 1.99 12.28 L 8.59 9.67 L 8.64 2.56 L 13.16 8.04 L 19.93 5.88 L 16.13 11.88 Z"
      }
    ]
  ]
};

export const DuctoSoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.27 17.66 L 13.39 15.89 L 9.18 21.61 L 8.73 14.52 L 1.99 12.28 L 8.59 9.67 L 8.64 2.56 L 13.16 8.04 L 19.93 5.88 L 16.13 11.88 Z" />
      {children}
    </svg>
  );
});

export default DuctoSoil;
