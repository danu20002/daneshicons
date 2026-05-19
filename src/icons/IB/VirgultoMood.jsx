import React from 'react';

export const iconData = {
  "id": "VirgultoMood",
  "name": "VirgultoMood",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 8.94 C 17.47 17.55, 17.35 18.15, 15.39 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 6.00 C 16.76 9.03, 7.38 19.64, 17.49 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 9.23 C 9.31 10.19, 5.22 7.10, 16.25 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 4.06 C 10.68 15.17, 19.54 9.27, 16.44 14.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.80 9.94 C 13.51 10.74, 7.75 17.86, 17.27 15.91"
      }
    ]
  ]
};

export const VirgultoMood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 8.94 C 17.47 17.55, 17.35 18.15, 15.39 18.38" />
      <path d="M 5.26 6.00 C 16.76 9.03, 7.38 19.64, 17.49 20.22" />
      <path d="M 5.29 9.23 C 9.31 10.19, 5.22 7.10, 16.25 15.89" />
      <path d="M 7.08 4.06 C 10.68 15.17, 19.54 9.27, 16.44 14.19" />
      <path d="M 8.80 9.94 C 13.51 10.74, 7.75 17.86, 17.27 15.91" />
      {children}
    </svg>
  );
});

export default VirgultoMood;
