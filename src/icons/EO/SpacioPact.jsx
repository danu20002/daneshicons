import React from 'react';

export const iconData = {
  "id": "SpacioPact",
  "name": "SpacioPact",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.80 12.00 L 18.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.80 L 12.00 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 1.43 12.00 a 10.57 10.57 0 1 0 21.14 0 a 10.57 10.57 0 1 0 -21.14 0"
      }
    ]
  ]
};

export const SpacioPact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.80 12.00 L 18.20 12.00" />
      <path d="M 12.00 5.80 L 12.00 18.20" />
      <path d="M 1.43 12.00 a 10.57 10.57 0 1 0 21.14 0 a 10.57 10.57 0 1 0 -21.14 0" />
      {children}
    </svg>
  );
});

export default SpacioPact;
