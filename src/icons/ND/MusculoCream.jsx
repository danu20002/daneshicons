import React from 'react';

export const iconData = {
  "id": "MusculoCream",
  "name": "MusculoCream",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 12.00 a 4.12 4.12 0 1 0 8.24 0 a 4.12 4.12 0 1 0 -8.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 12.00 a 8.29 8.29 0 1 0 16.57 0 a 8.29 8.29 0 1 0 -16.57 0"
      }
    ]
  ]
};

export const MusculoCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0" />
      <path d="M 7.88 12.00 a 4.12 4.12 0 1 0 8.24 0 a 4.12 4.12 0 1 0 -8.24 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0" />
      <path d="M 3.71 12.00 a 8.29 8.29 0 1 0 16.57 0 a 8.29 8.29 0 1 0 -16.57 0" />
      {children}
    </svg>
  );
});

export default MusculoCream;
