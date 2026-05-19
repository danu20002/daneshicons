import React from 'react';

export const iconData = {
  "id": "StigmaPit",
  "name": "StigmaPit",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 2.66 C 6.61 11.29, 17.54 15.85, 17.40 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 3.16 C 15.00 18.63, 19.98 16.81, 20.68 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 2.73 C 12.64 10.83, 5.46 14.62, 14.65 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 7.47 C 9.96 13.62, 12.39 5.55, 19.39 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 4.82 C 14.83 12.84, 13.90 10.99, 16.27 15.36"
      }
    ]
  ]
};

export const StigmaPit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 2.66 C 6.61 11.29, 17.54 15.85, 17.40 19.83" />
      <path d="M 6.14 3.16 C 15.00 18.63, 19.98 16.81, 20.68 21.03" />
      <path d="M 3.35 2.73 C 12.64 10.83, 5.46 14.62, 14.65 20.10" />
      <path d="M 7.10 7.47 C 9.96 13.62, 12.39 5.55, 19.39 20.11" />
      <path d="M 7.75 4.82 C 14.83 12.84, 13.90 10.99, 16.27 15.36" />
      {children}
    </svg>
  );
});

export default StigmaPit;
