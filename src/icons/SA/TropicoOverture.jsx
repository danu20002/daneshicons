import React from 'react';

export const iconData = {
  "id": "TropicoOverture",
  "name": "TropicoOverture",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 13.47 L 7.82 3.90 L 18.41 5.52 L 20.14 16.10 L 10.62 21.01 Z"
      }
    ]
  ]
};

export const TropicoOverture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 13.47 L 7.82 3.90 L 18.41 5.52 L 20.14 16.10 L 10.62 21.01 Z" />
      {children}
    </svg>
  );
});

export default TropicoOverture;
