import React from 'react';

export const iconData = {
  "id": "NectoRevenue",
  "name": "NectoRevenue",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.32 21.60 L 2.67 14.32 L 6.91 3.84 L 18.19 4.64 L 20.92 15.61 Z"
      }
    ]
  ]
};

export const NectoRevenue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.32 21.60 L 2.67 14.32 L 6.91 3.84 L 18.19 4.64 L 20.92 15.61 Z" />
      {children}
    </svg>
  );
});

export default NectoRevenue;
