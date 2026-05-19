import React from 'react';

export const iconData = {
  "id": "UndosoSail",
  "name": "UndosoSail",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 9.31 C 5.61 13.87, 18.65 14.26, 15.43 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 4.84 C 5.64 10.80, 14.30 4.94, 14.60 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 5.89 C 18.61 5.95, 11.19 19.59, 14.73 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 3.78 C 7.74 10.82, 14.97 4.45, 14.02 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 5.17 C 11.05 19.65, 5.27 10.13, 21.52 17.25"
      }
    ]
  ]
};

export const UndosoSail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 9.31 C 5.61 13.87, 18.65 14.26, 15.43 15.41" />
      <path d="M 2.33 4.84 C 5.64 10.80, 14.30 4.94, 14.60 20.22" />
      <path d="M 2.19 5.89 C 18.61 5.95, 11.19 19.59, 14.73 14.55" />
      <path d="M 7.16 3.78 C 7.74 10.82, 14.97 4.45, 14.02 18.49" />
      <path d="M 2.04 5.17 C 11.05 19.65, 5.27 10.13, 21.52 17.25" />
      {children}
    </svg>
  );
});

export default UndosoSail;
