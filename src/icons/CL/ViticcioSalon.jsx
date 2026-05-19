import React from 'react';

export const iconData = {
  "id": "ViticcioSalon",
  "name": "ViticcioSalon",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.39 4.79 8.55 Q 7.33 8.67 9.87 8.79 Q 10.46 6.88 11.04 4.96 Q 15.14 8.55 19.25 12.14 Q 19.75 12.48 20.26 12.82 Q 18.94 15.36 17.62 17.90 Q 15.60 18.95 13.58 20.00 Q 8.84 18.11 4.11 16.23 Z"
      }
    ]
  ]
};

export const ViticcioSalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.39 4.79 8.55 Q 7.33 8.67 9.87 8.79 Q 10.46 6.88 11.04 4.96 Q 15.14 8.55 19.25 12.14 Q 19.75 12.48 20.26 12.82 Q 18.94 15.36 17.62 17.90 Q 15.60 18.95 13.58 20.00 Q 8.84 18.11 4.11 16.23 Z" />
      {children}
    </svg>
  );
});

export default ViticcioSalon;
