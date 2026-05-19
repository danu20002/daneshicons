import React from 'react';

export const iconData = {
  "id": "QuintBullet",
  "name": "QuintBullet",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 12.00 a 3.63 3.63 0 1 0 7.26 0 a 3.63 3.63 0 1 0 -7.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 0 10.69 0 a 5.34 5.34 0 1 0 -10.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.95 0 a 8.48 8.48 0 1 0 -16.95 0"
      }
    ]
  ]
};

export const QuintBullet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0" />
      <path d="M 8.37 12.00 a 3.63 3.63 0 1 0 7.26 0 a 3.63 3.63 0 1 0 -7.26 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 0 10.69 0 a 5.34 5.34 0 1 0 -10.69 0" />
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0" />
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.95 0 a 8.48 8.48 0 1 0 -16.95 0" />
      {children}
    </svg>
  );
});

export default QuintBullet;
