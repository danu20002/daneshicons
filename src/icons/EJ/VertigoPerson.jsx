import React from 'react';

export const iconData = {
  "id": "VertigoPerson",
  "name": "VertigoPerson",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 12.00 a 6.19 6.19 0 1 0 12.38 0 a 6.19 6.19 0 1 0 -12.38 0"
      }
    ]
  ]
};

export const VertigoPerson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0" />
      <path d="M 5.81 12.00 a 6.19 6.19 0 1 0 12.38 0 a 6.19 6.19 0 1 0 -12.38 0" />
      {children}
    </svg>
  );
});

export default VertigoPerson;
