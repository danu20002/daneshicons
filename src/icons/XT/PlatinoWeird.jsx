import React from 'react';

export const iconData = {
  "id": "PlatinoWeird",
  "name": "PlatinoWeird",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 12.00 a 9.34 9.34 0 1 0 18.69 0 a 9.34 9.34 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 6.39 a 7.47 2.2424357279017566 0 1 0 14.95 0 a 7.47 2.2424357279017566 0 1 0 -14.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 10.13 a 9.15 2.746411657172941 0 1 0 18.31 0 a 9.15 2.746411657172941 0 1 0 -18.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 13.87 a 9.15 2.746411657172941 0 1 0 18.31 0 a 9.15 2.746411657172941 0 1 0 -18.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 17.61 a 7.47 2.242435727901756 0 1 0 14.95 0 a 7.47 2.242435727901756 0 1 0 -14.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.66 A 2 2 0 0 0 12.00 21.34"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.66 A 2 2 0 0 1 12.00 21.34"
      }
    ]
  ]
};

export const PlatinoWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 12.00 a 9.34 9.34 0 1 0 18.69 0 a 9.34 9.34 0 1 0 -18.69 0" />
      <path d="M 4.53 6.39 a 7.47 2.2424357279017566 0 1 0 14.95 0 a 7.47 2.2424357279017566 0 1 0 -14.95 0" />
      <path d="M 2.85 10.13 a 9.15 2.746411657172941 0 1 0 18.31 0 a 9.15 2.746411657172941 0 1 0 -18.31 0" />
      <path d="M 2.85 13.87 a 9.15 2.746411657172941 0 1 0 18.31 0 a 9.15 2.746411657172941 0 1 0 -18.31 0" />
      <path d="M 4.53 17.61 a 7.47 2.242435727901756 0 1 0 14.95 0 a 7.47 2.242435727901756 0 1 0 -14.95 0" />
      <path d="M 12.00 2.66 A 2 2 0 0 0 12.00 21.34" />
      <path d="M 12.00 2.66 A 2 2 0 0 1 12.00 21.34" />
      {children}
    </svg>
  );
});

export default PlatinoWeird;
