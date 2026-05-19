import React from 'react';

export const iconData = {
  "id": "TornadoLove",
  "name": "TornadoLove",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 6.70 C 6.47 11.04, 7.48 15.72, 16.55 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 3.67 C 11.97 12.91, 8.00 8.27, 18.03 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.56 C 4.17 18.82, 5.05 6.30, 21.21 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 3.06 C 15.15 4.50, 19.35 11.06, 21.00 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 3.39 C 8.51 12.56, 5.55 14.56, 15.32 15.24"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 7.76 C 5.87 6.69, 14.90 5.48, 15.02 16.12"
      }
    ]
  ]
};

export const TornadoLove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 6.70 C 6.47 11.04, 7.48 15.72, 16.55 20.30" />
      <path d="M 8.73 3.67 C 11.97 12.91, 8.00 8.27, 18.03 20.91" />
      <path d="M 5.32 5.56 C 4.17 18.82, 5.05 6.30, 21.21 17.47" />
      <path d="M 6.91 3.06 C 15.15 4.50, 19.35 11.06, 21.00 16.96" />
      <path d="M 5.47 3.39 C 8.51 12.56, 5.55 14.56, 15.32 15.24" />
      <path d="M 4.78 7.76 C 5.87 6.69, 14.90 5.48, 15.02 16.12" />
      {children}
    </svg>
  );
});

export default TornadoLove;
