import React from 'react';

export const iconData = {
  "id": "GamaImpose",
  "name": "GamaImpose",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.28 20.52 L 10.54 14.71 L 1.98 12.31 L 10.38 9.38 L 16.74 3.16 L 15.08 11.90 Z"
      }
    ]
  ]
};

export const GamaImpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.28 20.52 L 10.54 14.71 L 1.98 12.31 L 10.38 9.38 L 16.74 3.16 L 15.08 11.90 Z" />
      {children}
    </svg>
  );
});

export default GamaImpose;
