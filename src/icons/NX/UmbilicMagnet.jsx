import React from 'react';

export const iconData = {
  "id": "UmbilicMagnet",
  "name": "UmbilicMagnet",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 3.87 C 13.39 14.00, 10.02 5.35, 15.33 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 8.33 C 8.26 9.80, 18.91 17.27, 18.56 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.34 6.30 C 15.49 13.85, 5.19 10.14, 18.26 21.67"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 6.20 C 7.54 17.53, 5.15 5.40, 17.48 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 8.84 C 19.89 6.51, 19.36 12.92, 14.37 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 9.22 C 11.09 16.09, 14.98 4.88, 20.34 18.23"
      }
    ]
  ]
};

export const UmbilicMagnet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 3.87 C 13.39 14.00, 10.02 5.35, 15.33 20.29" />
      <path d="M 2.44 8.33 C 8.26 9.80, 18.91 17.27, 18.56 21.49" />
      <path d="M 9.34 6.30 C 15.49 13.85, 5.19 10.14, 18.26 21.67" />
      <path d="M 3.03 6.20 C 7.54 17.53, 5.15 5.40, 17.48 20.26" />
      <path d="M 2.32 8.84 C 19.89 6.51, 19.36 12.92, 14.37 20.96" />
      <path d="M 3.02 9.22 C 11.09 16.09, 14.98 4.88, 20.34 18.23" />
      {children}
    </svg>
  );
});

export default UmbilicMagnet;
