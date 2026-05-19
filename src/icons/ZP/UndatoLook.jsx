import React from 'react';

export const iconData = {
  "id": "UndatoLook",
  "name": "UndatoLook",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.60 4.03 C 11.67 7.51, 18.12 8.84, 15.38 16.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 6.41 C 4.58 11.94, 8.07 9.62, 21.52 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 4.32 C 5.75 14.85, 14.07 5.56, 18.34 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 7.29 C 18.09 15.22, 13.73 4.80, 16.05 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 6.09 C 19.51 9.55, 12.75 16.88, 20.18 15.72"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 4.23 C 15.08 19.63, 8.62 16.13, 16.14 21.89"
      }
    ]
  ]
};

export const UndatoLook = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.60 4.03 C 11.67 7.51, 18.12 8.84, 15.38 16.19" />
      <path d="M 3.49 6.41 C 4.58 11.94, 8.07 9.62, 21.52 21.30" />
      <path d="M 5.47 4.32 C 5.75 14.85, 14.07 5.56, 18.34 20.75" />
      <path d="M 4.02 7.29 C 18.09 15.22, 13.73 4.80, 16.05 17.62" />
      <path d="M 4.67 6.09 C 19.51 9.55, 12.75 16.88, 20.18 15.72" />
      <path d="M 4.95 4.23 C 15.08 19.63, 8.62 16.13, 16.14 21.89" />
      {children}
    </svg>
  );
});

export default UndatoLook;
