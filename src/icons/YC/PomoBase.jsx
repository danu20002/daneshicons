import React from 'react';

export const iconData = {
  "id": "PomoBase",
  "name": "PomoBase",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 12.00 a 5.07 5.07 0 1 0 10.14 0 a 5.07 5.07 0 1 0 -10.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 12.00 a 7.77 7.77 0 1 0 15.55 0 a 7.77 7.77 0 1 0 -15.55 0"
      }
    ]
  ]
};

export const PomoBase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0" />
      <path d="M 6.93 12.00 a 5.07 5.07 0 1 0 10.14 0 a 5.07 5.07 0 1 0 -10.14 0" />
      <path d="M 4.23 12.00 a 7.77 7.77 0 1 0 15.55 0 a 7.77 7.77 0 1 0 -15.55 0" />
      {children}
    </svg>
  );
});

export default PomoBase;
