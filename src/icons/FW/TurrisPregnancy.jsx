import React from 'react';

export const iconData = {
  "id": "TurrisPregnancy",
  "name": "TurrisPregnancy",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.05 3.41 C 11.84 13.13, 19.05 5.13, 18.54 21.19"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 3.98 C 8.45 9.49, 5.17 6.72, 16.77 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 6.99 C 14.16 10.50, 4.25 16.68, 20.35 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 7.73 C 9.52 15.96, 12.54 16.68, 21.07 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 7.64 C 8.40 4.98, 18.82 8.52, 16.60 16.59"
      }
    ]
  ]
};

export const TurrisPregnancy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.05 3.41 C 11.84 13.13, 19.05 5.13, 18.54 21.19" />
      <path d="M 2.66 3.98 C 8.45 9.49, 5.17 6.72, 16.77 20.83" />
      <path d="M 3.42 6.99 C 14.16 10.50, 4.25 16.68, 20.35 18.69" />
      <path d="M 9.76 7.73 C 9.52 15.96, 12.54 16.68, 21.07 20.58" />
      <path d="M 3.65 7.64 C 8.40 4.98, 18.82 8.52, 16.60 16.59" />
      {children}
    </svg>
  );
});

export default TurrisPregnancy;
