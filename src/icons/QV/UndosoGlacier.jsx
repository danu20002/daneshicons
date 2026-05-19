import React from 'react';

export const iconData = {
  "id": "UndosoGlacier",
  "name": "UndosoGlacier",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.44 7.77 C 11.29 19.45, 16.30 11.45, 16.61 15.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 7.07 C 10.27 7.61, 7.51 18.60, 17.71 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 5.24 C 5.45 19.33, 15.40 15.13, 17.75 18.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 3.01 C 18.95 5.01, 9.22 13.36, 17.09 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 9.52 C 4.61 14.55, 16.73 18.79, 20.89 15.81"
      }
    ]
  ]
};

export const UndosoGlacier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.44 7.77 C 11.29 19.45, 16.30 11.45, 16.61 15.64" />
      <path d="M 8.40 7.07 C 10.27 7.61, 7.51 18.60, 17.71 15.11" />
      <path d="M 8.67 5.24 C 5.45 19.33, 15.40 15.13, 17.75 18.39" />
      <path d="M 5.01 3.01 C 18.95 5.01, 9.22 13.36, 17.09 17.45" />
      <path d="M 4.27 9.52 C 4.61 14.55, 16.73 18.79, 20.89 15.81" />
      {children}
    </svg>
  );
});

export default UndosoGlacier;
