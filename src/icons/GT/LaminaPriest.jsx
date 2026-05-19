import React from 'react';

export const iconData = {
  "id": "LaminaPriest",
  "name": "LaminaPriest",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 12.00 L 19.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.50 L 12.00 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 6.75 L 17.25 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 17.25 L 17.25 6.75"
      }
    ],
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 9.82 0 1 0 19.64 0 a 9.82 9.82 0 1 0 -19.64 0"
      }
    ]
  ]
};

export const LaminaPriest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 12.00 L 19.50 12.00" />
      <path d="M 12.00 4.50 L 12.00 19.50" />
      <path d="M 6.75 6.75 L 17.25 17.25" />
      <path d="M 6.75 17.25 L 17.25 6.75" />
      <path d="M 2.18 12.00 a 9.82 9.82 0 1 0 19.64 0 a 9.82 9.82 0 1 0 -19.64 0" />
      {children}
    </svg>
  );
});

export default LaminaPriest;
