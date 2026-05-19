import React from 'react';

export const iconData = {
  "id": "LensoZoom",
  "name": "LensoZoom",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.72 12.00 Q 14.09 12.68 19.06 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 17.13 Q 13.29 13.78 14.69 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 20.29 Q 12.00 14.20 9.31 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 20.29 Q 10.71 13.78 4.94 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 17.13 Q 9.91 12.68 3.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 Q 9.91 11.32 4.94 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 6.87 Q 10.71 10.22 9.31 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 3.71 Q 12.00 9.80 14.69 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 3.71 Q 13.29 10.22 19.06 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 6.87 Q 14.09 11.32 20.72 12.00"
      }
    ]
  ]
};

export const LensoZoom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.72 12.00 Q 14.09 12.68 19.06 17.13" />
      <path d="M 19.06 17.13 Q 13.29 13.78 14.69 20.29" />
      <path d="M 14.69 20.29 Q 12.00 14.20 9.31 20.29" />
      <path d="M 9.31 20.29 Q 10.71 13.78 4.94 17.13" />
      <path d="M 4.94 17.13 Q 9.91 12.68 3.28 12.00" />
      <path d="M 3.28 12.00 Q 9.91 11.32 4.94 6.87" />
      <path d="M 4.94 6.87 Q 10.71 10.22 9.31 3.71" />
      <path d="M 9.31 3.71 Q 12.00 9.80 14.69 3.71" />
      <path d="M 14.69 3.71 Q 13.29 10.22 19.06 6.87" />
      <path d="M 19.06 6.87 Q 14.09 11.32 20.72 12.00" />
      {children}
    </svg>
  );
});

export default LensoZoom;
