import React from 'react';

export const iconData = {
  "id": "PegasoScore",
  "name": "PegasoScore",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.85 9.44 L 15.86 12.95 L 18.65 18.38 L 13.10 15.82 L 9.79 20.95 L 9.25 14.87 L 3.15 14.56 L 8.14 11.05 L 5.35 5.62 L 10.90 8.18 L 14.21 3.05 L 14.75 9.13 Z"
      }
    ]
  ]
};

export const PegasoScore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.85 9.44 L 15.86 12.95 L 18.65 18.38 L 13.10 15.82 L 9.79 20.95 L 9.25 14.87 L 3.15 14.56 L 8.14 11.05 L 5.35 5.62 L 10.90 8.18 L 14.21 3.05 L 14.75 9.13 Z" />
      {children}
    </svg>
  );
});

export default PegasoScore;
