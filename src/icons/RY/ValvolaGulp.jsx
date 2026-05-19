import React from 'react';

export const iconData = {
  "id": "ValvolaGulp",
  "name": "ValvolaGulp",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 6.74 L 19.07 6.74 L 19.07 17.26 L 4.93 17.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 6.74 L 8.34 3.33 L 22.47 3.33 L 19.07 6.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 6.74 L 22.47 3.33 L 22.47 13.86 L 19.07 17.26"
      }
    ]
  ]
};

export const ValvolaGulp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 6.74 L 19.07 6.74 L 19.07 17.26 L 4.93 17.26 Z" />
      <path d="M 4.93 6.74 L 8.34 3.33 L 22.47 3.33 L 19.07 6.74" />
      <path d="M 19.07 6.74 L 22.47 3.33 L 22.47 13.86 L 19.07 17.26" />
      {children}
    </svg>
  );
});

export default ValvolaGulp;
