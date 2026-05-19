import React from 'react';

export const iconData = {
  "id": "ValvolaDetach",
  "name": "ValvolaDetach",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.39 15.98 L 5.02 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 10.74 11.02 A 3.35 3.94 5 0 1 20.30 15.65"
      }
    ]
  ]
};

export const ValvolaDetach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.39 15.98 L 5.02 15.75" />
      <path d="M 10.74 11.02 A 3.35 3.94 5 0 1 20.30 15.65" />
      {children}
    </svg>
  );
});

export default ValvolaDetach;
