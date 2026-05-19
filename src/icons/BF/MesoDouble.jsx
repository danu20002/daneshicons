import React from 'react';

export const iconData = {
  "id": "MesoDouble",
  "name": "MesoDouble",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.00 2.60 L 21.22 8.49 L 20.50 17.02 L 13.37 21.77 L 5.22 19.17 L 2.17 11.16 L 6.52 3.79 Z"
      }
    ]
  ]
};

export const MesoDouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.00 2.60 L 21.22 8.49 L 20.50 17.02 L 13.37 21.77 L 5.22 19.17 L 2.17 11.16 L 6.52 3.79 Z" />
      {children}
    </svg>
  );
});

export default MesoDouble;
