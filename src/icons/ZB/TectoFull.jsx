import React from 'react';

export const iconData = {
  "id": "TectoFull",
  "name": "TectoFull",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.98 20.80 A 2.11 2.34 125 0 1 6.00 9.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.46 L 12.07 20.96 L 5.90 17.38 L 4.73 4.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 20.39 Q 6.16 2.37 17.53 14.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 14.57 Q 9.35 5.30 11.93 15.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.79 7.25 C 8.42 3.07, 19.43 8.61, 13.96 13.29"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 4.72 L 6.01 7.64"
      }
    ]
  ]
};

export const TectoFull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.98 20.80 A 2.11 2.34 125 0 1 6.00 9.12" />
      <path d="M 3.69 12.46 L 12.07 20.96 L 5.90 17.38 L 4.73 4.86" />
      <path d="M 7.89 20.39 Q 6.16 2.37 17.53 14.22" />
      <path d="M 5.72 14.57 Q 9.35 5.30 11.93 15.86" />
      <path d="M 16.79 7.25 C 8.42 3.07, 19.43 8.61, 13.96 13.29" />
      <path d="M 7.16 4.72 L 6.01 7.64" />
      {children}
    </svg>
  );
});

export default TectoFull;
