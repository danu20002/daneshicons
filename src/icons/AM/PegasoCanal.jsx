import React from 'react';

export const iconData = {
  "id": "PegasoCanal",
  "name": "PegasoCanal",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.68 20.30 L 5.19 16.94 L 3.70 10.68 L 7.06 5.19 L 13.32 3.70 L 18.81 7.06 L 20.30 13.32 L 16.94 18.81 Z"
      }
    ]
  ]
};

export const PegasoCanal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.68 20.30 L 5.19 16.94 L 3.70 10.68 L 7.06 5.19 L 13.32 3.70 L 18.81 7.06 L 20.30 13.32 L 16.94 18.81 Z" />
      {children}
    </svg>
  );
});

export default PegasoCanal;
