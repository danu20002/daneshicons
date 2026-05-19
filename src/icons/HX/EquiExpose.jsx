import React from 'react';

export const iconData = {
  "id": "EquiExpose",
  "name": "EquiExpose",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.11 1.30 L 13.77 8.37 L 21.59 6.89 L 16.00 12.56 L 19.82 19.55 L 12.70 15.98 L 7.24 21.77 L 8.44 13.90 L 1.24 10.49 L 9.09 9.20 Z"
      }
    ]
  ]
};

export const EquiExpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.11 1.30 L 13.77 8.37 L 21.59 6.89 L 16.00 12.56 L 19.82 19.55 L 12.70 15.98 L 7.24 21.77 L 8.44 13.90 L 1.24 10.49 L 9.09 9.20 Z" />
      {children}
    </svg>
  );
});

export default EquiExpose;
