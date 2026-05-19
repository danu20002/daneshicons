import React from 'react';

export const iconData = {
  "id": "TropicoFringe",
  "name": "TropicoFringe",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.13 21.27 L 12.18 15.18 L 7.95 21.79 L 9.62 14.13 L 1.82 14.94 L 8.86 11.47 L 3.36 5.87 L 10.46 9.21 L 11.40 1.42 L 13.22 9.05 L 19.90 4.94 L 15.06 11.12 L 22.45 13.77 L 14.60 13.84 Z"
      }
    ]
  ]
};

export const TropicoFringe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.13 21.27 L 12.18 15.18 L 7.95 21.79 L 9.62 14.13 L 1.82 14.94 L 8.86 11.47 L 3.36 5.87 L 10.46 9.21 L 11.40 1.42 L 13.22 9.05 L 19.90 4.94 L 15.06 11.12 L 22.45 13.77 L 14.60 13.84 Z" />
      {children}
    </svg>
  );
});

export default TropicoFringe;
