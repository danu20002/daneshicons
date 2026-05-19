import React from 'react';

export const iconData = {
  "id": "CryoSalmon",
  "name": "CryoSalmon",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 12.00 a 5.12 5.12 0 1 0 10.25 0 a 5.12 5.12 0 1 0 -10.25 0"
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

export const CryoSalmon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" />
      <path d="M 6.88 12.00 a 5.12 5.12 0 1 0 10.25 0 a 5.12 5.12 0 1 0 -10.25 0" />
      <path d="M 4.23 12.00 a 7.77 7.77 0 1 0 15.55 0 a 7.77 7.77 0 1 0 -15.55 0" />
      {children}
    </svg>
  );
});

export default CryoSalmon;
