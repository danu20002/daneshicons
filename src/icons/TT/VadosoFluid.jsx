import React from 'react';

export const iconData = {
  "id": "VadosoFluid",
  "name": "VadosoFluid",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.31 4.05 C 9.43 19.69, 6.59 12.79, 20.87 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 3.72 C 7.67 9.00, 11.77 10.40, 14.81 14.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 3.83 C 15.34 16.16, 5.95 4.63, 15.71 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 6.16 C 11.86 5.86, 6.22 19.94, 15.05 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 6.84 C 11.62 9.96, 11.70 4.73, 17.17 21.42"
      }
    ]
  ]
};

export const VadosoFluid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.31 4.05 C 9.43 19.69, 6.59 12.79, 20.87 18.84" />
      <path d="M 3.30 3.72 C 7.67 9.00, 11.77 10.40, 14.81 14.62" />
      <path d="M 8.60 3.83 C 15.34 16.16, 5.95 4.63, 15.71 19.58" />
      <path d="M 9.74 6.16 C 11.86 5.86, 6.22 19.94, 15.05 15.81" />
      <path d="M 6.72 6.84 C 11.62 9.96, 11.70 4.73, 17.17 21.42" />
      {children}
    </svg>
  );
});

export default VadosoFluid;
