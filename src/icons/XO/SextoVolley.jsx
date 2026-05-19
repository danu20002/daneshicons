import React from 'react';

export const iconData = {
  "id": "SextoVolley",
  "name": "SextoVolley",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.18 12.00 Q 15.69 13.20 19.43 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 17.40 Q 14.28 15.14 14.84 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 20.73 Q 12.00 15.88 9.16 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 20.73 Q 9.72 15.14 4.57 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.57 17.40 Q 8.31 13.20 2.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 12.00 Q 8.31 10.80 4.57 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.57 6.60 Q 9.72 8.86 9.16 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 3.27 Q 12.00 8.12 14.84 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 3.27 Q 14.28 8.86 19.43 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 6.60 Q 15.69 10.80 21.18 12.00"
      }
    ]
  ]
};

export const SextoVolley = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.18 12.00 Q 15.69 13.20 19.43 17.40" />
      <path d="M 19.43 17.40 Q 14.28 15.14 14.84 20.73" />
      <path d="M 14.84 20.73 Q 12.00 15.88 9.16 20.73" />
      <path d="M 9.16 20.73 Q 9.72 15.14 4.57 17.40" />
      <path d="M 4.57 17.40 Q 8.31 13.20 2.82 12.00" />
      <path d="M 2.82 12.00 Q 8.31 10.80 4.57 6.60" />
      <path d="M 4.57 6.60 Q 9.72 8.86 9.16 3.27" />
      <path d="M 9.16 3.27 Q 12.00 8.12 14.84 3.27" />
      <path d="M 14.84 3.27 Q 14.28 8.86 19.43 6.60" />
      <path d="M 19.43 6.60 Q 15.69 10.80 21.18 12.00" />
      {children}
    </svg>
  );
});

export default SextoVolley;
