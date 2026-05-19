import React from 'react';

export const iconData = {
  "id": "SeismoOrnament",
  "name": "SeismoOrnament",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 13.93 L 16.52 13.38 L 2.24 12.62 L 5.44 20.92 L 19.72 7.94 L 4.76 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 6.72 L 5.21 13.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.48 19.07 L 4.13 15.97 L 9.61 2.73 L 17.60 17.97 L 9.49 5.52 L 20.27 5.64 L 14.17 8.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 13.24 C 18.81 5.63, 8.84 21.99, 15.33 10.15"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 9.91 C 21.53 11.15, 17.73 19.97, 10.27 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.36 18.33 A 2.43 2.38 41 0 0 9.14 15.03"
      }
    ]
  ]
};

export const SeismoOrnament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 13.93 L 16.52 13.38 L 2.24 12.62 L 5.44 20.92 L 19.72 7.94 L 4.76 3.52" />
      <path d="M 20.11 6.72 L 5.21 13.74" />
      <path d="M 12.48 19.07 L 4.13 15.97 L 9.61 2.73 L 17.60 17.97 L 9.49 5.52 L 20.27 5.64 L 14.17 8.76" />
      <path d="M 15.83 13.24 C 18.81 5.63, 8.84 21.99, 15.33 10.15" />
      <path d="M 20.74 9.91 C 21.53 11.15, 17.73 19.97, 10.27 20.38" />
      <path d="M 11.36 18.33 A 2.43 2.38 41 0 0 9.14 15.03" />
      {children}
    </svg>
  );
});

export default SeismoOrnament;
