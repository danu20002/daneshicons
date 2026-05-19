import React from 'react';

export const iconData = {
  "id": "DiscoOblique",
  "name": "DiscoOblique",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 7.73 a 7.39 2.2178031995194516 0 1 0 14.79 0 a 7.39 2.2178031995194516 0 1 0 -14.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 2.5608985485043374 0 1 0 17.07 0 a 8.54 2.5608985485043374 0 1 0 -17.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 16.27 a 7.39 2.2178031995194516 0 1 0 14.79 0 a 7.39 2.2178031995194516 0 1 0 -14.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.61 A 2 2 0 0 0 16.27 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.61 A 2 2 0 0 1 16.27 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.61 A 2 2 0 0 0 7.73 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.61 A 2 2 0 0 1 7.73 19.39"
      }
    ]
  ]
};

export const DiscoOblique = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0" />
      <path d="M 4.61 7.73 a 7.39 2.2178031995194516 0 1 0 14.79 0 a 7.39 2.2178031995194516 0 1 0 -14.79 0" />
      <path d="M 3.46 12.00 a 8.54 2.5608985485043374 0 1 0 17.07 0 a 8.54 2.5608985485043374 0 1 0 -17.07 0" />
      <path d="M 4.61 16.27 a 7.39 2.2178031995194516 0 1 0 14.79 0 a 7.39 2.2178031995194516 0 1 0 -14.79 0" />
      <path d="M 16.27 4.61 A 2 2 0 0 0 16.27 19.39" />
      <path d="M 16.27 4.61 A 2 2 0 0 1 16.27 19.39" />
      <path d="M 7.73 4.61 A 2 2 0 0 0 7.73 19.39" />
      <path d="M 7.73 4.61 A 2 2 0 0 1 7.73 19.39" />
      {children}
    </svg>
  );
});

export default DiscoOblique;
