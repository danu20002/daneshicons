import React from 'react';

export const iconData = {
  "id": "SedimenExclaim",
  "name": "SedimenExclaim",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 6.10 a 7.86 2.3585028802603483 0 1 0 15.72 0 a 7.86 2.3585028802603483 0 1 0 -15.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 10.03 a 9.63 2.8885643067611526 0 1 0 19.26 0 a 9.63 2.8885643067611526 0 1 0 -19.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 13.97 a 9.63 2.8885643067611526 0 1 0 19.26 0 a 9.63 2.8885643067611526 0 1 0 -19.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 17.90 a 7.86 2.358502880260348 0 1 0 15.72 0 a 7.86 2.358502880260348 0 1 0 -15.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 0 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 1 12.00 21.83"
      }
    ]
  ]
};

export const SedimenExclaim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0" />
      <path d="M 4.14 6.10 a 7.86 2.3585028802603483 0 1 0 15.72 0 a 7.86 2.3585028802603483 0 1 0 -15.72 0" />
      <path d="M 2.37 10.03 a 9.63 2.8885643067611526 0 1 0 19.26 0 a 9.63 2.8885643067611526 0 1 0 -19.26 0" />
      <path d="M 2.37 13.97 a 9.63 2.8885643067611526 0 1 0 19.26 0 a 9.63 2.8885643067611526 0 1 0 -19.26 0" />
      <path d="M 4.14 17.90 a 7.86 2.358502880260348 0 1 0 15.72 0 a 7.86 2.358502880260348 0 1 0 -15.72 0" />
      <path d="M 12.00 2.17 A 2 2 0 0 0 12.00 21.83" />
      <path d="M 12.00 2.17 A 2 2 0 0 1 12.00 21.83" />
      {children}
    </svg>
  );
});

export default SedimenExclaim;
