import React from 'react';

export const iconData = {
  "id": "ObsidiJudge",
  "name": "ObsidiJudge",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.26 2.09 C 6.78 19.37, 4.54 14.00, 20.03 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 2.68 C 11.59 12.84, 4.79 5.82, 21.66 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 6.15 C 16.13 19.49, 5.59 17.10, 21.59 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 2.63 C 18.93 8.18, 7.37 6.76, 19.05 14.20"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 8.10 C 11.47 8.82, 18.93 13.51, 17.85 21.75"
      }
    ]
  ]
};

export const ObsidiJudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.26 2.09 C 6.78 19.37, 4.54 14.00, 20.03 16.11" />
      <path d="M 7.67 2.68 C 11.59 12.84, 4.79 5.82, 21.66 14.55" />
      <path d="M 3.76 6.15 C 16.13 19.49, 5.59 17.10, 21.59 15.74" />
      <path d="M 2.90 2.63 C 18.93 8.18, 7.37 6.76, 19.05 14.20" />
      <path d="M 9.14 8.10 C 11.47 8.82, 18.93 13.51, 17.85 21.75" />
      {children}
    </svg>
  );
});

export default ObsidiJudge;
