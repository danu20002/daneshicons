import React from 'react';

export const iconData = {
  "id": "IsoConcept",
  "name": "IsoConcept",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 11.49 C 10.48 15.73, 10.09 8.81, 3.44 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 5.63 C 8.59 21.27, 6.69 6.09, 14.31 13.76"
      }
    ],
    [
      "path",
      {
        "d": "M 11.43 7.41 L 14.15 4.12 L 9.84 19.15 L 19.10 4.01"
      }
    ],
    [
      "path",
      {
        "d": "M 21.26 13.81 L 2.43 16.01 L 21.17 16.20 L 12.26 15.41 L 2.16 21.26 L 4.87 8.14"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 14.61 L 11.20 3.20 L 2.31 9.53 L 16.13 10.48"
      }
    ]
  ]
};

export const IsoConcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 11.49 C 10.48 15.73, 10.09 8.81, 3.44 13.11" />
      <path d="M 10.23 5.63 C 8.59 21.27, 6.69 6.09, 14.31 13.76" />
      <path d="M 11.43 7.41 L 14.15 4.12 L 9.84 19.15 L 19.10 4.01" />
      <path d="M 21.26 13.81 L 2.43 16.01 L 21.17 16.20 L 12.26 15.41 L 2.16 21.26 L 4.87 8.14" />
      <path d="M 19.78 14.61 L 11.20 3.20 L 2.31 9.53 L 16.13 10.48" />
      {children}
    </svg>
  );
});

export default IsoConcept;
