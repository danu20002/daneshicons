import React from 'react';

export const iconData = {
  "id": "ValchiriaFoil",
  "name": "ValchiriaFoil",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.69 6.73 L 17.27 19.69 L 4.31 17.27 L 6.73 4.31 Z"
      }
    ]
  ]
};

export const ValchiriaFoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.69 6.73 L 17.27 19.69 L 4.31 17.27 L 6.73 4.31 Z" />
      {children}
    </svg>
  );
});

export default ValchiriaFoil;
