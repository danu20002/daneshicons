import React from 'react';

export const iconData = {
  "id": "SanguiGiant",
  "name": "SanguiGiant",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 12.00 a 2.27 2.27 0 1 0 4.54 0 a 2.27 2.27 0 1 0 -4.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0"
      }
    ]
  ]
};

export const SanguiGiant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 12.00 a 2.27 2.27 0 1 0 4.54 0 a 2.27 2.27 0 1 0 -4.54 0" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0" />
      {children}
    </svg>
  );
});

export default SanguiGiant;
