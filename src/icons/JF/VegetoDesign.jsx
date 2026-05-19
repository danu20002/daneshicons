import React from 'react';

export const iconData = {
  "id": "VegetoDesign",
  "name": "VegetoDesign",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 12.00 a 5.04 5.04 0 1 1 10.08 0 a 5.04 5.04 0 1 1 -10.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 12.00 L 21.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 16.02 L 19.94 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 18.77 L 15.92 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 10.94 19.37 L 10.66 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 17.63 L 5.82 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 14.10 L 2.94 14.66"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 9.90 L 2.94 9.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 6.37 L 5.82 4.86"
      }
    ],
    [
      "path",
      {
        "d": "M 10.94 4.63 L 10.66 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 5.23 L 15.92 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 7.98 L 19.94 6.89"
      }
    ]
  ]
};

export const VegetoDesign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0" />
      <path d="M 6.96 12.00 a 5.04 5.04 0 1 1 10.08 0 a 5.04 5.04 0 1 1 -10.08 0" />
      <path d="M 19.44 12.00 L 21.44 12.00" />
      <path d="M 18.26 16.02 L 19.94 17.11" />
      <path d="M 15.09 18.77 L 15.92 20.59" />
      <path d="M 10.94 19.37 L 10.66 21.35" />
      <path d="M 7.13 17.63 L 5.82 19.14" />
      <path d="M 4.86 14.10 L 2.94 14.66" />
      <path d="M 4.86 9.90 L 2.94 9.34" />
      <path d="M 7.13 6.37 L 5.82 4.86" />
      <path d="M 10.94 4.63 L 10.66 2.65" />
      <path d="M 15.09 5.23 L 15.92 3.41" />
      <path d="M 18.26 7.98 L 19.94 6.89" />
      {children}
    </svg>
  );
});

export default VegetoDesign;
