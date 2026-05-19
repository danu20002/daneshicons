import React from 'react';

export const iconData = {
  "id": "ZuffaFace",
  "name": "ZuffaFace",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 16.16 L 6.73 11.15 L 5.50 5.46 L 11.18 6.73 L 16.21 3.80 L 16.76 9.59 L 21.10 13.47 L 15.76 15.79 L 13.41 21.11 L 9.56 16.75 Z"
      }
    ]
  ]
};

export const ZuffaFace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 16.16 L 6.73 11.15 L 5.50 5.46 L 11.18 6.73 L 16.21 3.80 L 16.76 9.59 L 21.10 13.47 L 15.76 15.79 L 13.41 21.11 L 9.56 16.75 Z" />
      {children}
    </svg>
  );
});

export default ZuffaFace;
