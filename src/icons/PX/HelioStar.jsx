import React from 'react';

export const iconData = {
  "id": "HelioStar",
  "name": "HelioStar",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 3.43 L 19.12 6.18 L 19.73 16.98 L 9.66 20.89 L 2.82 12.52 Z"
      }
    ]
  ]
};

export const HelioStar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 3.43 L 19.12 6.18 L 19.73 16.98 L 9.66 20.89 L 2.82 12.52 Z" />
      {children}
    </svg>
  );
});

export default HelioStar;
