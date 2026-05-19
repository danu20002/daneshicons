import React from 'react';

export const iconData = {
  "id": "TractoFusion",
  "name": "TractoFusion",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 12.00 a 7.52 7.52 0 1 0 15.05 0 a 7.52 7.52 0 1 0 -15.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 12.00 L 21.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.97 16.97 L 18.38 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.02 L 12.00 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 16.97 L 5.62 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 L 2.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 7.03 L 5.62 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.98 L 12.00 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 16.97 7.03 L 18.38 5.62"
      }
    ]
  ]
};

export const TractoFusion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 12.00 a 7.52 7.52 0 1 0 15.05 0 a 7.52 7.52 0 1 0 -15.05 0" />
      <path d="M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0" />
      <path d="M 19.02 12.00 L 21.02 12.00" />
      <path d="M 16.97 16.97 L 18.38 18.38" />
      <path d="M 12.00 19.02 L 12.00 21.02" />
      <path d="M 7.03 16.97 L 5.62 18.38" />
      <path d="M 4.98 12.00 L 2.98 12.00" />
      <path d="M 7.03 7.03 L 5.62 5.62" />
      <path d="M 12.00 4.98 L 12.00 2.98" />
      <path d="M 16.97 7.03 L 18.38 5.62" />
      {children}
    </svg>
  );
});

export default TractoFusion;
