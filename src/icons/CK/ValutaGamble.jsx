import React from 'react';

export const iconData = {
  "id": "ValutaGamble",
  "name": "ValutaGamble",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.73 21.69 L 10.92 20.43 L 9.19 19.78 L 16.05 17.57 L 9.52 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 21.10 L 19.81 2.30 L 18.79 12.88 L 21.74 5.41 L 11.78 18.07 L 12.66 6.52 L 16.32 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 13.36 Q 12.49 15.98 18.81 8.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 13.20 C 21.29 4.09, 3.32 16.80, 15.77 4.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 21.35 Q 16.28 21.82 5.44 21.10"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 9.22 L 4.73 21.19 L 11.43 4.28 L 6.45 21.15"
      }
    ]
  ]
};

export const ValutaGamble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.73 21.69 L 10.92 20.43 L 9.19 19.78 L 16.05 17.57 L 9.52 20.27" />
      <path d="M 19.22 21.10 L 19.81 2.30 L 18.79 12.88 L 21.74 5.41 L 11.78 18.07 L 12.66 6.52 L 16.32 18.94" />
      <path d="M 19.31 13.36 Q 12.49 15.98 18.81 8.97" />
      <path d="M 4.54 13.20 C 21.29 4.09, 3.32 16.80, 15.77 4.89" />
      <path d="M 7.58 21.35 Q 16.28 21.82 5.44 21.10" />
      <path d="M 17.99 9.22 L 4.73 21.19 L 11.43 4.28 L 6.45 21.15" />
      {children}
    </svg>
  );
});

export default ValutaGamble;
