import React from 'react';

export const iconData = {
  "id": "MesoRhapsody",
  "name": "MesoRhapsody",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.41 7.04 C 5.62 12.00, 19.79 14.32, 18.05 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 6.99 C 11.13 16.81, 4.34 8.29, 21.89 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 5.15 C 12.81 7.59, 14.25 8.19, 17.38 15.66"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 7.11 C 7.04 8.82, 17.29 18.89, 18.53 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 8.68 C 6.26 17.20, 17.67 15.94, 20.14 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 3.54 C 12.37 8.42, 5.53 11.23, 21.48 19.34"
      }
    ]
  ]
};

export const MesoRhapsody = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.41 7.04 C 5.62 12.00, 19.79 14.32, 18.05 18.16" />
      <path d="M 5.70 6.99 C 11.13 16.81, 4.34 8.29, 21.89 19.03" />
      <path d="M 7.69 5.15 C 12.81 7.59, 14.25 8.19, 17.38 15.66" />
      <path d="M 2.25 7.11 C 7.04 8.82, 17.29 18.89, 18.53 19.06" />
      <path d="M 5.85 8.68 C 6.26 17.20, 17.67 15.94, 20.14 20.53" />
      <path d="M 4.91 3.54 C 12.37 8.42, 5.53 11.23, 21.48 19.34" />
      {children}
    </svg>
  );
});

export default MesoRhapsody;
