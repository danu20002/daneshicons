import React from 'react';

export const iconData = {
  "id": "SensoPhysical",
  "name": "SensoPhysical",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 6.72 C 18.12 9.71, 17.41 16.30, 17.58 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 2.30 C 7.86 7.41, 6.85 14.49, 17.76 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 8.52 C 15.00 4.55, 12.48 11.55, 18.10 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 9.11 C 18.46 8.61, 5.09 5.71, 16.93 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 8.12 C 16.29 14.98, 13.07 13.97, 15.15 18.83"
      }
    ]
  ]
};

export const SensoPhysical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 6.72 C 18.12 9.71, 17.41 16.30, 17.58 17.27" />
      <path d="M 9.75 2.30 C 7.86 7.41, 6.85 14.49, 17.76 16.23" />
      <path d="M 5.93 8.52 C 15.00 4.55, 12.48 11.55, 18.10 21.27" />
      <path d="M 6.86 9.11 C 18.46 8.61, 5.09 5.71, 16.93 19.98" />
      <path d="M 2.82 8.12 C 16.29 14.98, 13.07 13.97, 15.15 18.83" />
      {children}
    </svg>
  );
});

export default SensoPhysical;
