import React from 'react';

export const iconData = {
  "id": "PantoMaterial",
  "name": "PantoMaterial",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.25 19.83 L 9.47 20.54 L 4.17 16.25 L 3.46 9.47 L 7.75 4.17 L 14.53 3.46 L 19.83 7.75 L 20.54 14.53 Z"
      }
    ]
  ]
};

export const PantoMaterial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.25 19.83 L 9.47 20.54 L 4.17 16.25 L 3.46 9.47 L 7.75 4.17 L 14.53 3.46 L 19.83 7.75 L 20.54 14.53 Z" />
      {children}
    </svg>
  );
});

export default PantoMaterial;
