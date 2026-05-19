import React from 'react';

export const iconData = {
  "id": "TigroCurve",
  "name": "TigroCurve",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.88 8.54 L 14.97 14.56 L 10.05 22.28 L 8.30 13.30 L 4.07 5.17 L 12.73 8.14 Z"
      }
    ]
  ]
};

export const TigroCurve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.88 8.54 L 14.97 14.56 L 10.05 22.28 L 8.30 13.30 L 4.07 5.17 L 12.73 8.14 Z" />
      {children}
    </svg>
  );
});

export default TigroCurve;
