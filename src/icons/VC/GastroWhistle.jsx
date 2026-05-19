import React from 'react';

export const iconData = {
  "id": "GastroWhistle",
  "name": "GastroWhistle",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.70 10.44 L 17.46 14.17 L 18.70 20.48 L 12.85 17.82 L 8.00 22.05 L 7.39 15.64 L 1.30 13.56 L 6.54 9.83 L 5.30 3.52 L 11.15 6.18 L 16.00 1.95 L 16.61 8.36 Z"
      }
    ]
  ]
};

export const GastroWhistle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.70 10.44 L 17.46 14.17 L 18.70 20.48 L 12.85 17.82 L 8.00 22.05 L 7.39 15.64 L 1.30 13.56 L 6.54 9.83 L 5.30 3.52 L 11.15 6.18 L 16.00 1.95 L 16.61 8.36 Z" />
      {children}
    </svg>
  );
});

export default GastroWhistle;
