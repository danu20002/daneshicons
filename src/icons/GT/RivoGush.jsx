import React from 'react';

export const iconData = {
  "id": "RivoGush",
  "name": "RivoGush",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 12.00 L 20.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.41 L 12.00 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 5.99 L 18.01 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 18.01 L 18.01 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 2.63 12.00 a 9.37 9.37 0 1 0 18.74 0 a 9.37 9.37 0 1 0 -18.74 0"
      }
    ]
  ]
};

export const RivoGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 12.00 L 20.59 12.00" />
      <path d="M 12.00 3.41 L 12.00 20.59" />
      <path d="M 5.99 5.99 L 18.01 18.01" />
      <path d="M 5.99 18.01 L 18.01 5.99" />
      <path d="M 2.63 12.00 a 9.37 9.37 0 1 0 18.74 0 a 9.37 9.37 0 1 0 -18.74 0" />
      {children}
    </svg>
  );
});

export default RivoGush;
