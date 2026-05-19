import React from 'react';

export const iconData = {
  "id": "ValvolaSwirl",
  "name": "ValvolaSwirl",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.74 5.02 C 17.30 15.29, 5.40 5.76, 14.83 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 4.67 C 19.79 13.51, 4.28 6.28, 14.29 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 9.66 C 6.74 9.80, 19.65 14.69, 18.25 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 5.36 C 15.57 7.67, 17.06 19.44, 17.34 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 4.11 C 15.42 18.59, 6.80 19.00, 16.68 20.76"
      }
    ]
  ]
};

export const ValvolaSwirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 5.02 C 17.30 15.29, 5.40 5.76, 14.83 18.93" />
      <path d="M 7.71 4.67 C 19.79 13.51, 4.28 6.28, 14.29 18.02" />
      <path d="M 9.35 9.66 C 6.74 9.80, 19.65 14.69, 18.25 17.13" />
      <path d="M 4.75 5.36 C 15.57 7.67, 17.06 19.44, 17.34 20.38" />
      <path d="M 5.77 4.11 C 15.42 18.59, 6.80 19.00, 16.68 20.76" />
      {children}
    </svg>
  );
});

export default ValvolaSwirl;
