import React from 'react';

export const iconData = {
  "id": "OctoParasol",
  "name": "OctoParasol",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.78 4.63 L 19.37 6.78 L 17.22 19.37 L 4.63 17.22 Z"
      }
    ]
  ]
};

export const OctoParasol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.78 4.63 L 19.37 6.78 L 17.22 19.37 L 4.63 17.22 Z" />
      {children}
    </svg>
  );
});

export default OctoParasol;
