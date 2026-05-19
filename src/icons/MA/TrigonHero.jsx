import React from 'react';

export const iconData = {
  "id": "TrigonHero",
  "name": "TrigonHero",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.90 8.00 L 5.23 8.31 L 5.48 10.82 L 3.06 10.01 L 4.43 10.35 L 3.09 8.83 L 4.73 10.70 L 5.28 10.78 L 4.95 13.02 L 7.62 11.51 L 9.19 12.58 L 10.51 11.16 L 11.48 12.07 L 9.07 11.60 L 9.29 9.30 L 8.91 6.79 L 7.95 6.58 L 5.96 4.40 L 8.31 3.35 L 10.73 1.62 L 12.78 2.47 L 12.54 4.85 L 9.78 4.62 L 7.83 6.56 L 10.16 8.85 L 7.39 6.25 L 10.14 8.66 L 10.66 10.40"
      }
    ]
  ]
};

export const TrigonHero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.90 8.00 L 5.23 8.31 L 5.48 10.82 L 3.06 10.01 L 4.43 10.35 L 3.09 8.83 L 4.73 10.70 L 5.28 10.78 L 4.95 13.02 L 7.62 11.51 L 9.19 12.58 L 10.51 11.16 L 11.48 12.07 L 9.07 11.60 L 9.29 9.30 L 8.91 6.79 L 7.95 6.58 L 5.96 4.40 L 8.31 3.35 L 10.73 1.62 L 12.78 2.47 L 12.54 4.85 L 9.78 4.62 L 7.83 6.56 L 10.16 8.85 L 7.39 6.25 L 10.14 8.66 L 10.66 10.40" />
      {children}
    </svg>
  );
});

export default TrigonHero;
