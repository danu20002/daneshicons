import React from 'react';

export const iconData = {
  "id": "PegasoLap",
  "name": "PegasoLap",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.32 18.92 L 3.67 12.66 L 6.29 5.90 L 13.21 3.73 L 19.22 7.79 L 19.79 15.02 L 14.49 19.98 Z"
      }
    ]
  ]
};

export const PegasoLap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.32 18.92 L 3.67 12.66 L 6.29 5.90 L 13.21 3.73 L 19.22 7.79 L 19.79 15.02 L 14.49 19.98 Z" />
      {children}
    </svg>
  );
});

export default PegasoLap;
