import React from 'react';

export const iconData = {
  "id": "GamaUnusual",
  "name": "GamaUnusual",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.64 13.03 L 14.42 14.94 L 10.97 22.64 L 9.06 14.42 L 1.36 10.97 L 9.58 9.06 L 13.03 1.36 L 14.94 9.58 Z"
      }
    ]
  ]
};

export const GamaUnusual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.64 13.03 L 14.42 14.94 L 10.97 22.64 L 9.06 14.42 L 1.36 10.97 L 9.58 9.06 L 13.03 1.36 L 14.94 9.58 Z" />
      {children}
    </svg>
  );
});

export default GamaUnusual;
