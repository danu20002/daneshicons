import React from 'react';

export const iconData = {
  "id": "TephroShadow",
  "name": "TephroShadow",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 6.36 L 9.55 6.52 L 12.99 2.43 L 15.52 7.14 L 20.78 8.08 L 17.96 12.62 L 19.79 17.64 L 14.45 17.48 L 11.01 21.57 L 8.48 16.86 L 3.22 15.92 L 6.04 11.38 Z"
      }
    ]
  ]
};

export const TephroShadow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 6.36 L 9.55 6.52 L 12.99 2.43 L 15.52 7.14 L 20.78 8.08 L 17.96 12.62 L 19.79 17.64 L 14.45 17.48 L 11.01 21.57 L 8.48 16.86 L 3.22 15.92 L 6.04 11.38 Z" />
      {children}
    </svg>
  );
});

export default TephroShadow;
