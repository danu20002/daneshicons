import React from 'react';

export const iconData = {
  "id": "TitoloMarshal",
  "name": "TitoloMarshal",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.28 4.13 C 17.62 18.06, 16.27 16.02, 20.49 15.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 8.29 C 6.38 8.62, 6.43 6.54, 21.41 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 2.92 C 7.34 15.28, 11.92 10.73, 19.79 14.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 5.90 C 7.45 10.40, 10.23 13.77, 18.28 16.28"
      }
    ]
  ]
};

export const TitoloMarshal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.28 4.13 C 17.62 18.06, 16.27 16.02, 20.49 15.67" />
      <path d="M 6.71 8.29 C 6.38 8.62, 6.43 6.54, 21.41 18.80" />
      <path d="M 7.92 2.92 C 7.34 15.28, 11.92 10.73, 19.79 14.14" />
      <path d="M 4.70 5.90 C 7.45 10.40, 10.23 13.77, 18.28 16.28" />
      {children}
    </svg>
  );
});

export default TitoloMarshal;
