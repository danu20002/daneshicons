import React from 'react';

export const iconData = {
  "id": "SunnoSea",
  "name": "SunnoSea",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.44 19.89 L 11.91 15.85 L 6.18 19.62 L 8.31 13.10 L 2.96 8.82 L 9.81 8.83 L 12.23 2.42 L 14.34 8.94 L 21.18 9.26 L 15.63 13.28 Z"
      }
    ]
  ]
};

export const SunnoSea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.44 19.89 L 11.91 15.85 L 6.18 19.62 L 8.31 13.10 L 2.96 8.82 L 9.81 8.83 L 12.23 2.42 L 14.34 8.94 L 21.18 9.26 L 15.63 13.28 Z" />
      {children}
    </svg>
  );
});

export default SunnoSea;
