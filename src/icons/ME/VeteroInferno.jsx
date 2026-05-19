import React from 'react';

export const iconData = {
  "id": "VeteroInferno",
  "name": "VeteroInferno",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.80 4.13 L 19.90 9.28 L 19.05 16.48 L 12.89 20.31 L 6.06 17.88 L 3.70 11.02 L 7.59 4.90 Z"
      }
    ]
  ]
};

export const VeteroInferno = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.80 4.13 L 19.90 9.28 L 19.05 16.48 L 12.89 20.31 L 6.06 17.88 L 3.70 11.02 L 7.59 4.90 Z" />
      {children}
    </svg>
  );
});

export default VeteroInferno;
