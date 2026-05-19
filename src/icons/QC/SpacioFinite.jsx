import React from 'react';

export const iconData = {
  "id": "SpacioFinite",
  "name": "SpacioFinite",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 4.41 C 18.25 14.67, 5.46 19.62, 17.01 15.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 9.53 C 10.84 6.65, 19.46 18.47, 18.85 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 2.99 C 16.42 6.83, 6.03 14.13, 20.02 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 6.36 C 12.45 5.78, 12.96 10.31, 14.99 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 3.36 C 12.91 16.58, 19.56 18.90, 14.28 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 8.98 C 10.59 15.86, 9.41 7.31, 18.92 21.28"
      }
    ]
  ]
};

export const SpacioFinite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 4.41 C 18.25 14.67, 5.46 19.62, 17.01 15.63" />
      <path d="M 8.68 9.53 C 10.84 6.65, 19.46 18.47, 18.85 18.87" />
      <path d="M 9.91 2.99 C 16.42 6.83, 6.03 14.13, 20.02 20.25" />
      <path d="M 3.93 6.36 C 12.45 5.78, 12.96 10.31, 14.99 19.42" />
      <path d="M 7.45 3.36 C 12.91 16.58, 19.56 18.90, 14.28 17.47" />
      <path d="M 5.26 8.98 C 10.59 15.86, 9.41 7.31, 18.92 21.28" />
      {children}
    </svg>
  );
});

export default SpacioFinite;
