import React from 'react';

export const iconData = {
  "id": "PortoHero",
  "name": "PortoHero",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.62 3.91 L 10.84 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 3.86 L 3.96 20.93 L 19.55 5.45 L 3.87 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 21.39 A 4.41 2.94 123 0 0 8.73 8.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.04 20.91 L 2.70 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 4.92 C 16.10 18.60, 18.82 8.39, 16.30 13.30"
      }
    ]
  ]
};

export const PortoHero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.62 3.91 L 10.84 21.97" />
      <path d="M 4.76 3.86 L 3.96 20.93 L 19.55 5.45 L 3.87 20.31" />
      <path d="M 7.80 21.39 A 4.41 2.94 123 0 0 8.73 8.42" />
      <path d="M 17.04 20.91 L 2.70 15.41" />
      <path d="M 14.28 4.92 C 16.10 18.60, 18.82 8.39, 16.30 13.30" />
      {children}
    </svg>
  );
});

export default PortoHero;
