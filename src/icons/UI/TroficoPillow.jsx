import React from 'react';

export const iconData = {
  "id": "TroficoPillow",
  "name": "TroficoPillow",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.96 19.05 L 13.08 16.16 L 10.20 21.05 L 9.42 15.44 L 3.80 16.24 L 7.70 12.12 L 3.57 8.23 L 9.23 8.72 L 9.69 3.06 L 12.84 7.78 L 17.55 4.62 L 15.82 10.03 L 21.23 11.74 L 15.92 13.75 Z"
      }
    ]
  ]
};

export const TroficoPillow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.96 19.05 L 13.08 16.16 L 10.20 21.05 L 9.42 15.44 L 3.80 16.24 L 7.70 12.12 L 3.57 8.23 L 9.23 8.72 L 9.69 3.06 L 12.84 7.78 L 17.55 4.62 L 15.82 10.03 L 21.23 11.74 L 15.92 13.75 Z" />
      {children}
    </svg>
  );
});

export default TroficoPillow;
