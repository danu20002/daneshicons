import React from 'react';

export const iconData = {
  "id": "StiloShare",
  "name": "StiloShare",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 1 14.34 0 a 7.17 7.17 0 1 1 -14.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 12.00 L 22.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 19.13 L 17.11 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 19.13 L 6.89 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 L 1.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 4.87 L 6.89 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 4.87 L 17.11 3.14"
      }
    ]
  ]
};

export const StiloShare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0" />
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 1 14.34 0 a 7.17 7.17 0 1 1 -14.34 0" />
      <path d="M 20.23 12.00 L 22.23 12.00" />
      <path d="M 16.11 19.13 L 17.11 20.86" />
      <path d="M 7.89 19.13 L 6.89 20.86" />
      <path d="M 3.77 12.00 L 1.77 12.00" />
      <path d="M 7.89 4.87 L 6.89 3.14" />
      <path d="M 16.11 4.87 L 17.11 3.14" />
      {children}
    </svg>
  );
});

export default StiloShare;
