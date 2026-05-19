import React from 'react';

export const iconData = {
  "id": "MonoForge",
  "name": "MonoForge",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.77 9.27 L 15.77 9.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 13.16 L 12.48 16.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 13.56 L 7.76 10.10"
      }
    ]
  ]
};

export const MonoForge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.77 9.27 L 15.77 9.27" />
      <path d="M 14.48 13.16 L 12.48 16.63" />
      <path d="M 9.76 13.56 L 7.76 10.10" />
      {children}
    </svg>
  );
});

export default MonoForge;
