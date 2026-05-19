import React from 'react';

export const iconData = {
  "id": "HeptaMortal",
  "name": "HeptaMortal",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.77 19.10 A 4.91 6.17 31 0 0 19.82 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 15.87 Q 18.49 8.37 2.14 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 5.91 Q 2.12 2.77 13.39 4.31"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 18.26 A 3.52 4.04 146 0 0 5.33 7.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.11 16.94 C 15.82 6.88, 2.37 20.85, 18.70 7.97"
      }
    ],
    [
      "path",
      {
        "d": "M 18.14 19.27 Q 5.66 15.54 5.65 2.24"
      }
    ]
  ]
};

export const HeptaMortal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.77 19.10 A 4.91 6.17 31 0 0 19.82 18.75" />
      <path d="M 15.41 15.87 Q 18.49 8.37 2.14 21.52" />
      <path d="M 9.51 5.91 Q 2.12 2.77 13.39 4.31" />
      <path d="M 16.68 18.26 A 3.52 4.04 146 0 0 5.33 7.58" />
      <path d="M 2.11 16.94 C 15.82 6.88, 2.37 20.85, 18.70 7.97" />
      <path d="M 18.14 19.27 Q 5.66 15.54 5.65 2.24" />
      {children}
    </svg>
  );
});

export default HeptaMortal;
