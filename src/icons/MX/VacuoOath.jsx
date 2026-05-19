import React from 'react';

export const iconData = {
  "id": "VacuoOath",
  "name": "VacuoOath",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.01 13.50 L 15.83 19.20 L 8.76 19.48 L 4.13 14.13 L 5.43 7.18 L 11.67 3.85 L 18.17 6.67 Z"
      }
    ]
  ]
};

export const VacuoOath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.01 13.50 L 15.83 19.20 L 8.76 19.48 L 4.13 14.13 L 5.43 7.18 L 11.67 3.85 L 18.17 6.67 Z" />
      {children}
    </svg>
  );
});

export default VacuoOath;
