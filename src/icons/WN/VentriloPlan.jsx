import React from 'react';

export const iconData = {
  "id": "VentriloPlan",
  "name": "VentriloPlan",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 17.14 L 13.16 16.57 L 6.86 20.63 L 7.43 13.16 L 3.37 6.86 L 10.84 7.43 L 17.14 3.37 L 16.57 10.84 Z"
      }
    ]
  ]
};

export const VentriloPlan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 17.14 L 13.16 16.57 L 6.86 20.63 L 7.43 13.16 L 3.37 6.86 L 10.84 7.43 L 17.14 3.37 L 16.57 10.84 Z" />
      {children}
    </svg>
  );
});

export default VentriloPlan;
