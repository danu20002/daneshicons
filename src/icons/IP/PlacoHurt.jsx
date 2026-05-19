import React from 'react';

export const iconData = {
  "id": "PlacoHurt",
  "name": "PlacoHurt",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 11.92 L 5.68 6.60 L 10.63 3.80 L 16.22 4.84 L 19.84 9.23 L 19.79 14.92 L 16.09 19.24 L 10.48 20.18 L 5.58 17.29 Z"
      }
    ]
  ]
};

export const PlacoHurt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 11.92 L 5.68 6.60 L 10.63 3.80 L 16.22 4.84 L 19.84 9.23 L 19.79 14.92 L 16.09 19.24 L 10.48 20.18 L 5.58 17.29 Z" />
      {children}
    </svg>
  );
});

export default PlacoHurt;
