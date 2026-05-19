import React from 'react';

export const iconData = {
  "id": "TechnoWaltz",
  "name": "TechnoWaltz",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 8.98 a 8.53 2.5593849776650672 0 1 0 17.06 0 a 8.53 2.5593849776650672 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 15.02 a 8.53 2.559384977665067 0 1 0 17.06 0 a 8.53 2.559384977665067 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.16 A 2 2 0 0 0 16.52 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.16 A 2 2 0 0 1 16.52 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.16 A 2 2 0 0 0 7.48 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.16 A 2 2 0 0 1 7.48 19.84"
      }
    ]
  ]
};

export const TechnoWaltz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0" />
      <path d="M 3.47 8.98 a 8.53 2.5593849776650672 0 1 0 17.06 0 a 8.53 2.5593849776650672 0 1 0 -17.06 0" />
      <path d="M 3.47 15.02 a 8.53 2.559384977665067 0 1 0 17.06 0 a 8.53 2.559384977665067 0 1 0 -17.06 0" />
      <path d="M 16.52 4.16 A 2 2 0 0 0 16.52 19.84" />
      <path d="M 16.52 4.16 A 2 2 0 0 1 16.52 19.84" />
      <path d="M 7.48 4.16 A 2 2 0 0 0 7.48 19.84" />
      <path d="M 7.48 4.16 A 2 2 0 0 1 7.48 19.84" />
      {children}
    </svg>
  );
});

export default TechnoWaltz;
