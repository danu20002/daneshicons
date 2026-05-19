import React from 'react';

export const iconData = {
  "id": "UncinoSatire",
  "name": "UncinoSatire",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 5.69 L 20.46 5.69 L 20.46 18.31 L 3.54 18.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 5.69 L 6.85 2.38 L 23.77 2.38 L 20.46 5.69"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 5.69 L 23.77 2.38 L 23.77 15.00 L 20.46 18.31"
      }
    ]
  ]
};

export const UncinoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 5.69 L 20.46 5.69 L 20.46 18.31 L 3.54 18.31 Z" />
      <path d="M 3.54 5.69 L 6.85 2.38 L 23.77 2.38 L 20.46 5.69" />
      <path d="M 20.46 5.69 L 23.77 2.38 L 23.77 15.00 L 20.46 18.31" />
      {children}
    </svg>
  );
});

export default UncinoSatire;
