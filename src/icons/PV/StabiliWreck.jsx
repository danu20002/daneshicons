import React from 'react';

export const iconData = {
  "id": "StabiliWreck",
  "name": "StabiliWreck",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 15.16 L 8.84 20.03 L 3.97 8.84 L 15.16 3.97 Z"
      }
    ]
  ]
};

export const StabiliWreck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 15.16 L 8.84 20.03 L 3.97 8.84 L 15.16 3.97 Z" />
      {children}
    </svg>
  );
});

export default StabiliWreck;
