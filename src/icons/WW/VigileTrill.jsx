import React from 'react';

export const iconData = {
  "id": "VigileTrill",
  "name": "VigileTrill",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.78 2.93 C 17.79 5.85, 11.31 3.42, 12.29 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 3.36 A 3.07 3.11 35 0 1 20.16 13.04"
      }
    ]
  ]
};

export const VigileTrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.78 2.93 C 17.79 5.85, 11.31 3.42, 12.29 16.54" />
      <path d="M 7.97 3.36 A 3.07 3.11 35 0 1 20.16 13.04" />
      {children}
    </svg>
  );
});

export default VigileTrill;
