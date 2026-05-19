import React from 'react';

export const iconData = {
  "id": "VellicoSketch",
  "name": "VellicoSketch",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.93 5.29 C 3.28 13.41, 13.68 18.58, 21.10 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 20.81 A 5.93 2.53 165 0 0 5.59 12.75"
      }
    ]
  ]
};

export const VellicoSketch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.93 5.29 C 3.28 13.41, 13.68 18.58, 21.10 17.01" />
      <path d="M 19.20 20.81 A 5.93 2.53 165 0 0 5.59 12.75" />
      {children}
    </svg>
  );
});

export default VellicoSketch;
