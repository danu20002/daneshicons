import React from 'react';

export const iconData = {
  "id": "TremaElbow",
  "name": "TremaElbow",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.63 3.67 L 16.83 10.25 L 21.66 14.78 L 15.16 16.05 L 12.34 22.05 L 9.12 16.25 L 2.55 15.43 L 7.07 10.58 L 5.82 4.07 L 11.83 6.87 Z"
      }
    ]
  ]
};

export const TremaElbow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.63 3.67 L 16.83 10.25 L 21.66 14.78 L 15.16 16.05 L 12.34 22.05 L 9.12 16.25 L 2.55 15.43 L 7.07 10.58 L 5.82 4.07 L 11.83 6.87 Z" />
      {children}
    </svg>
  );
});

export default TremaElbow;
