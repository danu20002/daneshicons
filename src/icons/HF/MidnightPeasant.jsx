import React from 'react';

export const iconData = {
  "id": "MidnightPeasant",
  "name": "MidnightPeasant",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.48 20.90 L 9.74 14.31 L 3.05 9.70 L 11.13 8.89 L 18.46 5.40 L 15.13 12.80 Z"
      }
    ]
  ]
};

export const MidnightPeasant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.48 20.90 L 9.74 14.31 L 3.05 9.70 L 11.13 8.89 L 18.46 5.40 L 15.13 12.80 Z" />
      {children}
    </svg>
  );
});

export default MidnightPeasant;
