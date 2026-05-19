import React from 'react';

export const iconData = {
  "id": "ClinoWolf",
  "name": "ClinoWolf",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 10.60 L 10.76 8.77 L 17.66 5.00 L 15.42 12.54 L 15.24 20.40 L 9.83 14.69 Z"
      }
    ]
  ]
};

export const ClinoWolf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 10.60 L 10.76 8.77 L 17.66 5.00 L 15.42 12.54 L 15.24 20.40 L 9.83 14.69 Z" />
      {children}
    </svg>
  );
});

export default ClinoWolf;
