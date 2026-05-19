import React from 'react';

export const iconData = {
  "id": "ParaWorm",
  "name": "ParaWorm",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.84 14.77 L 4.13 6.56 L 11.34 2.46 L 19.05 5.53 L 21.45 13.48 L 16.73 20.31 L 8.45 20.88 Z"
      }
    ]
  ]
};

export const ParaWorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.84 14.77 L 4.13 6.56 L 11.34 2.46 L 19.05 5.53 L 21.45 13.48 L 16.73 20.31 L 8.45 20.88 Z" />
      {children}
    </svg>
  );
});

export default ParaWorm;
