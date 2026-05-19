import React from 'react';

export const iconData = {
  "id": "ObsidiPlain",
  "name": "ObsidiPlain",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 9.89 C 4.81 17.41, 19.71 4.83, 14.55 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 3.48 C 7.99 7.24, 6.23 19.29, 19.06 18.39"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 7.75 C 4.63 9.08, 15.73 17.71, 16.49 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 6.18 C 4.40 13.97, 14.46 11.79, 20.14 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 7.08 C 10.39 17.68, 17.52 5.65, 15.89 18.02"
      }
    ]
  ]
};

export const ObsidiPlain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 9.89 C 4.81 17.41, 19.71 4.83, 14.55 21.81" />
      <path d="M 4.30 3.48 C 7.99 7.24, 6.23 19.29, 19.06 18.39" />
      <path d="M 3.72 7.75 C 4.63 9.08, 15.73 17.71, 16.49 18.91" />
      <path d="M 6.14 6.18 C 4.40 13.97, 14.46 11.79, 20.14 18.74" />
      <path d="M 9.45 7.08 C 10.39 17.68, 17.52 5.65, 15.89 18.02" />
      {children}
    </svg>
  );
});

export default ObsidiPlain;
