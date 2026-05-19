import React from 'react';

export const iconData = {
  "id": "TurrisSoda",
  "name": "TurrisSoda",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.15 4.29 L 16.98 10.05 L 21.76 13.47 L 16.18 15.34 L 15.60 21.19 L 11.20 17.29 L 5.85 19.71 L 7.02 13.95 L 2.24 10.53 L 7.82 8.66 L 8.40 2.81 L 12.80 6.71 Z"
      }
    ]
  ]
};

export const TurrisSoda = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.15 4.29 L 16.98 10.05 L 21.76 13.47 L 16.18 15.34 L 15.60 21.19 L 11.20 17.29 L 5.85 19.71 L 7.02 13.95 L 2.24 10.53 L 7.82 8.66 L 8.40 2.81 L 12.80 6.71 Z" />
      {children}
    </svg>
  );
});

export default TurrisSoda;
