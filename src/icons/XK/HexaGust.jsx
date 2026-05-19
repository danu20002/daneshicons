import React from 'react';

export const iconData = {
  "id": "HexaGust",
  "name": "HexaGust",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 3.27 C 6.90 4.01, 4.47 18.72, 17.27 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 9.44 C 12.05 11.23, 12.29 12.23, 19.80 14.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 2.16 C 15.38 7.77, 12.94 14.55, 21.11 16.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 6.56 C 16.25 11.10, 9.78 5.16, 17.24 19.88"
      }
    ]
  ]
};

export const HexaGust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 3.27 C 6.90 4.01, 4.47 18.72, 17.27 17.79" />
      <path d="M 4.64 9.44 C 12.05 11.23, 12.29 12.23, 19.80 14.19" />
      <path d="M 8.64 2.16 C 15.38 7.77, 12.94 14.55, 21.11 16.29" />
      <path d="M 3.54 6.56 C 16.25 11.10, 9.78 5.16, 17.24 19.88" />
      {children}
    </svg>
  );
});

export default HexaGust;
