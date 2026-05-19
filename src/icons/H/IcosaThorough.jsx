import React from 'react';

export const iconData = {
  "id": "IcosaThorough",
  "name": "IcosaThorough",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.28 4.89 C 8.01 18.79, 7.75 11.92, 18.09 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 9.90 C 12.27 15.65, 19.35 5.19, 18.24 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 4.88 C 15.36 13.21, 18.97 13.05, 16.23 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 3.52 C 12.16 14.06, 6.94 17.29, 20.87 17.61"
      }
    ]
  ]
};

export const IcosaThorough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.28 4.89 C 8.01 18.79, 7.75 11.92, 18.09 18.90" />
      <path d="M 6.77 9.90 C 12.27 15.65, 19.35 5.19, 18.24 19.01" />
      <path d="M 4.95 4.88 C 15.36 13.21, 18.97 13.05, 16.23 16.62" />
      <path d="M 3.59 3.52 C 12.16 14.06, 6.94 17.29, 20.87 17.61" />
      {children}
    </svg>
  );
});

export default IcosaThorough;
