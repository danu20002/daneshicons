import React from 'react';

export const iconData = {
  "id": "CentriFlange",
  "name": "CentriFlange",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 12.00 L 20.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.64 L 12.00 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 6.15 L 17.85 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 17.85 L 17.85 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 1.62 12.00 a 10.38 10.38 0 1 0 20.76 0 a 10.38 10.38 0 1 0 -20.76 0"
      }
    ]
  ]
};

export const CentriFlange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 12.00 L 20.36 12.00" />
      <path d="M 12.00 3.64 L 12.00 20.36" />
      <path d="M 6.15 6.15 L 17.85 17.85" />
      <path d="M 6.15 17.85 L 17.85 6.15" />
      <path d="M 1.62 12.00 a 10.38 10.38 0 1 0 20.76 0 a 10.38 10.38 0 1 0 -20.76 0" />
      {children}
    </svg>
  );
});

export default CentriFlange;
