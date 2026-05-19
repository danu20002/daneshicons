import React from 'react';

export const iconData = {
  "id": "QuasiDisco",
  "name": "QuasiDisco",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 8.15 C 10.32 9.59, 15.13 11.36, 18.55 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 9.47 C 7.80 12.55, 8.72 5.97, 21.16 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 4.61 C 5.94 8.33, 5.77 18.24, 14.08 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 8.46 C 17.40 10.29, 7.78 13.08, 17.84 19.60"
      }
    ]
  ]
};

export const QuasiDisco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 8.15 C 10.32 9.59, 15.13 11.36, 18.55 18.84" />
      <path d="M 7.64 9.47 C 7.80 12.55, 8.72 5.97, 21.16 21.25" />
      <path d="M 5.73 4.61 C 5.94 8.33, 5.77 18.24, 14.08 18.17" />
      <path d="M 4.07 8.46 C 17.40 10.29, 7.78 13.08, 17.84 19.60" />
      {children}
    </svg>
  );
});

export default QuasiDisco;
