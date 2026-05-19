import React from 'react';

export const iconData = {
  "id": "VacuoScrub",
  "name": "VacuoScrub",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.20 20.92 L 2.34 11.14 L 9.83 2.55 L 20.32 7.02 L 19.31 18.37 Z"
      }
    ]
  ]
};

export const VacuoScrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.20 20.92 L 2.34 11.14 L 9.83 2.55 L 20.32 7.02 L 19.31 18.37 Z" />
      {children}
    </svg>
  );
});

export default VacuoScrub;
