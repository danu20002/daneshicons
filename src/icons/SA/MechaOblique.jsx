import React from 'react';

export const iconData = {
  "id": "MechaOblique",
  "name": "MechaOblique",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.19 21.70 L 4.70 18.75 L 2.51 9.05 L 9.81 2.30 L 19.30 5.25 L 21.49 14.95 Z"
      }
    ]
  ]
};

export const MechaOblique = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.19 21.70 L 4.70 18.75 L 2.51 9.05 L 9.81 2.30 L 19.30 5.25 L 21.49 14.95 Z" />
      {children}
    </svg>
  );
});

export default MechaOblique;
