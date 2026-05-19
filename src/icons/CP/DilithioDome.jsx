import React from 'react';

export const iconData = {
  "id": "DilithioDome",
  "name": "DilithioDome",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 5.09 L 20.51 5.09 L 20.51 18.91 L 3.49 18.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 5.09 L 7.23 1.35 L 24.25 1.35 L 20.51 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 5.09 L 24.25 1.35 L 24.25 15.17 L 20.51 18.91"
      }
    ]
  ]
};

export const DilithioDome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 5.09 L 20.51 5.09 L 20.51 18.91 L 3.49 18.91 Z" />
      <path d="M 3.49 5.09 L 7.23 1.35 L 24.25 1.35 L 20.51 5.09" />
      <path d="M 20.51 5.09 L 24.25 1.35 L 24.25 15.17 L 20.51 18.91" />
      {children}
    </svg>
  );
});

export default DilithioDome;
