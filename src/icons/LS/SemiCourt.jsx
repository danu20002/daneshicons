import React from 'react';

export const iconData = {
  "id": "SemiCourt",
  "name": "SemiCourt",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 9.48 C 10.31 14.23, 18.22 6.57, 16.59 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 6.23 C 7.43 15.21, 13.83 18.41, 18.36 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.91 9.98 C 18.05 19.42, 4.49 10.19, 21.02 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.48 6.30 C 17.88 15.08, 13.07 19.18, 15.22 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 2.59 C 17.79 19.86, 17.12 12.29, 18.87 15.56"
      }
    ]
  ]
};

export const SemiCourt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 9.48 C 10.31 14.23, 18.22 6.57, 16.59 17.61" />
      <path d="M 7.21 6.23 C 7.43 15.21, 13.83 18.41, 18.36 21.82" />
      <path d="M 8.91 9.98 C 18.05 19.42, 4.49 10.19, 21.02 16.80" />
      <path d="M 3.48 6.30 C 17.88 15.08, 13.07 19.18, 15.22 15.55" />
      <path d="M 4.54 2.59 C 17.79 19.86, 17.12 12.29, 18.87 15.56" />
      {children}
    </svg>
  );
});

export default SemiCourt;
