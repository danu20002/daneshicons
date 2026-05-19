import React from 'react';

export const iconData = {
  "id": "MoleculoWise",
  "name": "MoleculoWise",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.07 20.22 L 6.84 4.49 L 21.09 11.29 Z"
      }
    ]
  ]
};

export const MoleculoWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.07 20.22 L 6.84 4.49 L 21.09 11.29 Z" />
      {children}
    </svg>
  );
});

export default MoleculoWise;
