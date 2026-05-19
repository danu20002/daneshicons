import React from 'react';

export const iconData = {
  "id": "UricoQuasar",
  "name": "UricoQuasar",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.40 3.02 C 4.01 17.68, 15.00 4.01, 19.06 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 4.88 C 8.50 16.46, 12.12 16.39, 21.03 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 9.90 C 17.43 17.84, 8.46 7.57, 21.12 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 4.46 C 15.08 18.84, 19.63 18.86, 20.02 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 8.39 C 11.38 13.14, 19.02 9.41, 16.46 14.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 6.23 C 12.67 19.24, 7.43 11.03, 20.32 19.47"
      }
    ]
  ]
};

export const UricoQuasar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.40 3.02 C 4.01 17.68, 15.00 4.01, 19.06 16.06" />
      <path d="M 6.04 4.88 C 8.50 16.46, 12.12 16.39, 21.03 18.30" />
      <path d="M 3.65 9.90 C 17.43 17.84, 8.46 7.57, 21.12 14.75" />
      <path d="M 8.00 4.46 C 15.08 18.84, 19.63 18.86, 20.02 17.02" />
      <path d="M 8.43 8.39 C 11.38 13.14, 19.02 9.41, 16.46 14.61" />
      <path d="M 8.21 6.23 C 12.67 19.24, 7.43 11.03, 20.32 19.47" />
      {children}
    </svg>
  );
});

export default UricoQuasar;
