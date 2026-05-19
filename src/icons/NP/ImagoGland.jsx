import React from 'react';

export const iconData = {
  "id": "ImagoGland",
  "name": "ImagoGland",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 12.00 L 20.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.94 15.43 L 19.67 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 17.94 L 16.43 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.86 L 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 17.94 L 7.57 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 15.43 L 4.33 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 12.00 L 3.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 8.57 L 4.33 7.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 6.06 L 7.57 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.14 L 12.00 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 6.06 L 16.43 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 17.94 8.57 L 19.67 7.57"
      }
    ]
  ]
};

export const ImagoGland = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0" />
      <path d="M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0" />
      <path d="M 18.86 12.00 L 20.86 12.00" />
      <path d="M 17.94 15.43 L 19.67 16.43" />
      <path d="M 15.43 17.94 L 16.43 19.67" />
      <path d="M 12.00 18.86 L 12.00 20.86" />
      <path d="M 8.57 17.94 L 7.57 19.67" />
      <path d="M 6.06 15.43 L 4.33 16.43" />
      <path d="M 5.14 12.00 L 3.14 12.00" />
      <path d="M 6.06 8.57 L 4.33 7.57" />
      <path d="M 8.57 6.06 L 7.57 4.33" />
      <path d="M 12.00 5.14 L 12.00 3.14" />
      <path d="M 15.43 6.06 L 16.43 4.33" />
      <path d="M 17.94 8.57 L 19.67 7.57" />
      {children}
    </svg>
  );
});

export default ImagoGland;
