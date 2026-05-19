import React from 'react';

export const iconData = {
  "id": "KataViable",
  "name": "KataViable",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 7.12 C 15.30 19.25, 11.61 19.79, 18.49 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 6.19 C 13.94 18.81, 13.34 18.75, 16.37 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 7.86 2.98 C 8.68 9.76, 4.99 5.65, 19.01 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 5.44 C 12.25 10.81, 14.17 16.34, 16.52 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 9.41 C 19.22 18.50, 7.68 7.02, 21.03 21.40"
      }
    ]
  ]
};

export const KataViable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 7.12 C 15.30 19.25, 11.61 19.79, 18.49 17.82" />
      <path d="M 2.19 6.19 C 13.94 18.81, 13.34 18.75, 16.37 20.71" />
      <path d="M 7.86 2.98 C 8.68 9.76, 4.99 5.65, 19.01 19.33" />
      <path d="M 6.55 5.44 C 12.25 10.81, 14.17 16.34, 16.52 15.03" />
      <path d="M 9.91 9.41 C 19.22 18.50, 7.68 7.02, 21.03 21.40" />
      {children}
    </svg>
  );
});

export default KataViable;
