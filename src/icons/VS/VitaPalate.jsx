import React from 'react';

export const iconData = {
  "id": "VitaPalate",
  "name": "VitaPalate",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.78 2.17 L 19.55 5.69 L 21.64 13.97 L 16.47 20.76 L 7.94 20.96 L 2.46 14.41 L 4.17 6.04 Z"
      }
    ]
  ]
};

export const VitaPalate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.78 2.17 L 19.55 5.69 L 21.64 13.97 L 16.47 20.76 L 7.94 20.96 L 2.46 14.41 L 4.17 6.04 Z" />
      {children}
    </svg>
  );
});

export default VitaPalate;
