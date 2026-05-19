import React from 'react';

export const iconData = {
  "id": "VorticeSaucer",
  "name": "VorticeSaucer",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.87 0 a 8.93 8.93 0 1 0 -17.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 1 14.26 0 a 7.13 7.13 0 1 1 -14.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 12.00 L 22.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 19.30 L 17.22 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 19.30 L 6.78 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 L 1.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.70 L 6.78 2.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.70 L 17.22 2.96"
      }
    ]
  ]
};

export const VorticeSaucer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.87 0 a 8.93 8.93 0 1 0 -17.87 0" />
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 1 14.26 0 a 7.13 7.13 0 1 1 -14.26 0" />
      <path d="M 20.43 12.00 L 22.43 12.00" />
      <path d="M 16.22 19.30 L 17.22 21.04" />
      <path d="M 7.78 19.30 L 6.78 21.04" />
      <path d="M 3.57 12.00 L 1.57 12.00" />
      <path d="M 7.78 4.70 L 6.78 2.96" />
      <path d="M 16.22 4.70 L 17.22 2.96" />
      {children}
    </svg>
  );
});

export default VorticeSaucer;
