import React from 'react';

export const iconData = {
  "id": "MembraSoccer",
  "name": "MembraSoccer",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 11.41 L 15.11 13.54 L 17.07 19.61 L 12.22 15.47 L 7.94 20.20 L 9.11 13.93 L 2.87 12.59 L 8.89 10.46 L 6.93 4.39 L 11.78 8.53 L 16.06 3.80 L 14.89 10.07 Z"
      }
    ]
  ]
};

export const MembraSoccer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 11.41 L 15.11 13.54 L 17.07 19.61 L 12.22 15.47 L 7.94 20.20 L 9.11 13.93 L 2.87 12.59 L 8.89 10.46 L 6.93 4.39 L 11.78 8.53 L 16.06 3.80 L 14.89 10.07 Z" />
      {children}
    </svg>
  );
});

export default MembraSoccer;
