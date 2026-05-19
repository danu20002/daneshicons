import React from 'react';

export const iconData = {
  "id": "OntoRisk",
  "name": "OntoRisk",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 3.60 C 14.22 15.31, 17.85 11.37, 16.26 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 5.81 C 12.78 15.40, 4.52 10.81, 14.45 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 2.03 8.19 C 14.33 14.08, 16.07 17.99, 16.08 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 2.99 C 6.13 14.80, 14.15 6.99, 17.86 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 4.01 C 7.07 16.11, 16.67 11.53, 15.50 19.81"
      }
    ]
  ]
};

export const OntoRisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 3.60 C 14.22 15.31, 17.85 11.37, 16.26 18.82" />
      <path d="M 4.68 5.81 C 12.78 15.40, 4.52 10.81, 14.45 14.13" />
      <path d="M 2.03 8.19 C 14.33 14.08, 16.07 17.99, 16.08 17.46" />
      <path d="M 5.21 2.99 C 6.13 14.80, 14.15 6.99, 17.86 16.78" />
      <path d="M 3.53 4.01 C 7.07 16.11, 16.67 11.53, 15.50 19.81" />
      {children}
    </svg>
  );
});

export default OntoRisk;
