import React from 'react';

export const iconData = {
  "id": "StrobiloTaxi",
  "name": "StrobiloTaxi",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.07 3.23 L 15.66 8.85 L 21.13 10.27 L 16.56 13.60 L 18.06 19.05 L 12.90 16.75 L 8.93 20.77 L 8.34 15.15 L 2.87 13.73 L 7.44 10.40 L 5.94 4.95 L 11.10 7.25 Z"
      }
    ]
  ]
};

export const StrobiloTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.07 3.23 L 15.66 8.85 L 21.13 10.27 L 16.56 13.60 L 18.06 19.05 L 12.90 16.75 L 8.93 20.77 L 8.34 15.15 L 2.87 13.73 L 7.44 10.40 L 5.94 4.95 L 11.10 7.25 Z" />
      {children}
    </svg>
  );
});

export default StrobiloTaxi;
