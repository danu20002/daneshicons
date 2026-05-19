import React from 'react';

export const iconData = {
  "id": "NavioFine",
  "name": "NavioFine",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.56 4.60 L 15.02 3.92 L 20.20 9.32 L 19.21 16.74 L 12.78 20.59 L 5.77 17.97 L 3.45 10.85 Z"
      }
    ]
  ]
};

export const NavioFine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.56 4.60 L 15.02 3.92 L 20.20 9.32 L 19.21 16.74 L 12.78 20.59 L 5.77 17.97 L 3.45 10.85 Z" />
      {children}
    </svg>
  );
});

export default NavioFine;
