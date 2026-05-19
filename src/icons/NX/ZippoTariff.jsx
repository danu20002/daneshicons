import React from 'react';

export const iconData = {
  "id": "ZippoTariff",
  "name": "ZippoTariff",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.24 3.69 C 17.35 9.46, 14.10 11.40, 16.95 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 9.07 C 18.04 19.01, 4.63 4.16, 21.13 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 6.84 C 10.95 10.54, 14.94 10.39, 14.28 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 3.57 C 4.85 19.96, 18.81 8.17, 18.76 14.29"
      }
    ]
  ]
};

export const ZippoTariff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.24 3.69 C 17.35 9.46, 14.10 11.40, 16.95 17.92" />
      <path d="M 3.02 9.07 C 18.04 19.01, 4.63 4.16, 21.13 18.29" />
      <path d="M 6.61 6.84 C 10.95 10.54, 14.94 10.39, 14.28 19.86" />
      <path d="M 7.67 3.57 C 4.85 19.96, 18.81 8.17, 18.76 14.29" />
      {children}
    </svg>
  );
});

export default ZippoTariff;
