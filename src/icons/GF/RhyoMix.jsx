import React from 'react';

export const iconData = {
  "id": "RhyoMix",
  "name": "RhyoMix",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 7.62 a 7.59 2.277912133008378 0 1 0 15.19 0 a 7.59 2.277912133008378 0 1 0 -15.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 2.630306366365403 0 1 0 17.54 0 a 8.77 2.630306366365403 0 1 0 -17.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 16.38 a 7.59 2.277912133008378 0 1 0 15.19 0 a 7.59 2.277912133008378 0 1 0 -15.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.23 A 2 2 0 0 0 12.00 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.23 A 2 2 0 0 1 12.00 20.77"
      }
    ]
  ]
};

export const RhyoMix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      <path d="M 4.41 7.62 a 7.59 2.277912133008378 0 1 0 15.19 0 a 7.59 2.277912133008378 0 1 0 -15.19 0" />
      <path d="M 3.23 12.00 a 8.77 2.630306366365403 0 1 0 17.54 0 a 8.77 2.630306366365403 0 1 0 -17.54 0" />
      <path d="M 4.41 16.38 a 7.59 2.277912133008378 0 1 0 15.19 0 a 7.59 2.277912133008378 0 1 0 -15.19 0" />
      <path d="M 12.00 3.23 A 2 2 0 0 0 12.00 20.77" />
      <path d="M 12.00 3.23 A 2 2 0 0 1 12.00 20.77" />
      {children}
    </svg>
  );
});

export default RhyoMix;
