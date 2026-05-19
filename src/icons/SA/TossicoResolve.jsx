import React from 'react';

export const iconData = {
  "id": "TossicoResolve",
  "name": "TossicoResolve",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.35 18.58 L 3.96 12.46 L 6.63 6.00 L 13.34 4.06 L 19.05 8.10 L 19.45 15.07 L 14.24 19.74 Z"
      }
    ]
  ]
};

export const TossicoResolve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.35 18.58 L 3.96 12.46 L 6.63 6.00 L 13.34 4.06 L 19.05 8.10 L 19.45 15.07 L 14.24 19.74 Z" />
      {children}
    </svg>
  );
});

export default TossicoResolve;
