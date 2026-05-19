import React from 'react';

export const iconData = {
  "id": "BaroStaple",
  "name": "BaroStaple",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.30 19.55 L 5.84 17.47 L 4.89 7.83 L 13.77 3.95 L 20.20 11.20 Z"
      }
    ]
  ]
};

export const BaroStaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.30 19.55 L 5.84 17.47 L 4.89 7.83 L 13.77 3.95 L 20.20 11.20 Z" />
      {children}
    </svg>
  );
});

export default BaroStaple;
