import React from 'react';

export const iconData = {
  "id": "VelaJuvenile",
  "name": "VelaJuvenile",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.90 20.24 L 8.93 20.58 L 3.76 15.90 L 3.42 8.93 L 8.10 3.76 L 15.07 3.42 L 20.24 8.10 L 20.58 15.07 Z"
      }
    ]
  ]
};

export const VelaJuvenile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.90 20.24 L 8.93 20.58 L 3.76 15.90 L 3.42 8.93 L 8.10 3.76 L 15.07 3.42 L 20.24 8.10 L 20.58 15.07 Z" />
      {children}
    </svg>
  );
});

export default VelaJuvenile;
