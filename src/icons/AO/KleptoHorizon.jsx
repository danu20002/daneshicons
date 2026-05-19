import React from 'react';

export const iconData = {
  "id": "KleptoHorizon",
  "name": "KleptoHorizon",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 12.81 L 13.94 20.60 L 4.42 16.51 L 5.37 6.18 L 15.48 3.90 Z"
      }
    ]
  ]
};

export const KleptoHorizon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 12.81 L 13.94 20.60 L 4.42 16.51 L 5.37 6.18 L 15.48 3.90 Z" />
      {children}
    </svg>
  );
});

export default KleptoHorizon;
