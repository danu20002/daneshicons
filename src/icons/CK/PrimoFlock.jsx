import React from 'react';

export const iconData = {
  "id": "PrimoFlock",
  "name": "PrimoFlock",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.63 4.23 C 4.96 13.71, 17.58 6.26, 10.26 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 21.64 L 20.01 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 11.73 3.64 L 13.03 16.28 L 15.66 8.85 L 18.53 3.39 L 11.57 4.21 L 20.12 18.12 L 4.48 12.25"
      }
    ]
  ]
};

export const PrimoFlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.63 4.23 C 4.96 13.71, 17.58 6.26, 10.26 19.53" />
      <path d="M 3.27 21.64 L 20.01 2.75" />
      <path d="M 11.73 3.64 L 13.03 16.28 L 15.66 8.85 L 18.53 3.39 L 11.57 4.21 L 20.12 18.12 L 4.48 12.25" />
      {children}
    </svg>
  );
});

export default PrimoFlock;
