import React from 'react';

export const iconData = {
  "id": "SelectoWrist",
  "name": "SelectoWrist",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.95 7.02 C 5.34 6.86, 14.50 7.97, 14.20 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 7.23 C 9.99 12.58, 14.44 9.58, 21.09 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 9.89 C 5.23 19.29, 7.18 6.79, 16.97 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 3.77 C 17.71 15.52, 4.91 15.30, 18.44 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 7.03 C 10.84 9.25, 11.59 13.98, 19.72 16.72"
      }
    ]
  ]
};

export const SelectoWrist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.95 7.02 C 5.34 6.86, 14.50 7.97, 14.20 20.22" />
      <path d="M 3.68 7.23 C 9.99 12.58, 14.44 9.58, 21.09 16.59" />
      <path d="M 6.82 9.89 C 5.23 19.29, 7.18 6.79, 16.97 21.45" />
      <path d="M 7.00 3.77 C 17.71 15.52, 4.91 15.30, 18.44 18.78" />
      <path d="M 4.39 7.03 C 10.84 9.25, 11.59 13.98, 19.72 16.72" />
      {children}
    </svg>
  );
});

export default SelectoWrist;
