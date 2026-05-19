import React from 'react';

export const iconData = {
  "id": "SpiralKroner",
  "name": "SpiralKroner",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.54 4.56 C 13.25 12.04, 14.38 8.82, 14.55 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 2.82 C 4.22 4.03, 11.38 6.76, 20.12 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 7.18 C 18.23 16.56, 5.12 14.17, 17.36 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 6.22 C 5.05 16.29, 10.80 17.56, 20.80 15.70"
      }
    ],
    [
      "path",
      {
        "d": "M 9.11 8.73 C 11.42 6.78, 6.53 8.48, 17.73 15.52"
      }
    ]
  ]
};

export const SpiralKroner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.54 4.56 C 13.25 12.04, 14.38 8.82, 14.55 18.00" />
      <path d="M 6.19 2.82 C 4.22 4.03, 11.38 6.76, 20.12 15.11" />
      <path d="M 3.74 7.18 C 18.23 16.56, 5.12 14.17, 17.36 20.78" />
      <path d="M 6.35 6.22 C 5.05 16.29, 10.80 17.56, 20.80 15.70" />
      <path d="M 9.11 8.73 C 11.42 6.78, 6.53 8.48, 17.73 15.52" />
      {children}
    </svg>
  );
});

export default SpiralKroner;
