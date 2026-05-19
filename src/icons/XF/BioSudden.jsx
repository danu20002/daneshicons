import React from 'react';

export const iconData = {
  "id": "BioSudden",
  "name": "BioSudden",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 10.15 L 6.03 4.58 L 12.20 2.48 L 18.27 4.84 L 21.41 10.54 L 20.15 16.93 L 15.07 21.01 L 8.56 20.88 L 3.66 16.59 Z"
      }
    ]
  ]
};

export const BioSudden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 10.15 L 6.03 4.58 L 12.20 2.48 L 18.27 4.84 L 21.41 10.54 L 20.15 16.93 L 15.07 21.01 L 8.56 20.88 L 3.66 16.59 Z" />
      {children}
    </svg>
  );
});

export default BioSudden;
