import React from 'react';

export const iconData = {
  "id": "HexaStick",
  "name": "HexaStick",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.23 9.79 C 9.40 9.78, 9.11 6.02, 19.63 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 5.12 C 7.18 16.95, 5.33 9.43, 16.60 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 5.01 C 11.80 10.35, 7.23 11.28, 16.44 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 3.56 C 4.45 18.52, 17.52 18.63, 14.79 15.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 9.57 C 14.38 15.82, 4.02 19.06, 17.57 16.00"
      }
    ]
  ]
};

export const HexaStick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.23 9.79 C 9.40 9.78, 9.11 6.02, 19.63 21.95" />
      <path d="M 3.87 5.12 C 7.18 16.95, 5.33 9.43, 16.60 18.03" />
      <path d="M 4.27 5.01 C 11.80 10.35, 7.23 11.28, 16.44 14.65" />
      <path d="M 7.41 3.56 C 4.45 18.52, 17.52 18.63, 14.79 15.10" />
      <path d="M 6.18 9.57 C 14.38 15.82, 4.02 19.06, 17.57 16.00" />
      {children}
    </svg>
  );
});

export default HexaStick;
