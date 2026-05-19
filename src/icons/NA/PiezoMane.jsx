import React from 'react';

export const iconData = {
  "id": "PiezoMane",
  "name": "PiezoMane",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.78 15.33 L 14.81 14.76 L 15.50 21.72 L 11.59 15.91 L 6.58 20.79 L 8.69 14.12 L 1.74 13.24 L 8.27 10.73 L 4.63 4.76 L 10.67 8.30 L 13.07 1.72 L 14.06 8.65 L 20.70 6.43 L 15.91 11.53 Z"
      }
    ]
  ]
};

export const PiezoMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.78 15.33 L 14.81 14.76 L 15.50 21.72 L 11.59 15.91 L 6.58 20.79 L 8.69 14.12 L 1.74 13.24 L 8.27 10.73 L 4.63 4.76 L 10.67 8.30 L 13.07 1.72 L 14.06 8.65 L 20.70 6.43 L 15.91 11.53 Z" />
      {children}
    </svg>
  );
});

export default PiezoMane;
