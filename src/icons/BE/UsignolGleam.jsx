import React from 'react';

export const iconData = {
  "id": "UsignolGleam",
  "name": "UsignolGleam",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 12.00 a 7.89 7.89 0 1 0 15.77 0 a 7.89 7.89 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 12.00 a 5.84 5.84 0 1 1 11.68 0 a 5.84 5.84 0 1 1 -11.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 12.00 L 21.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 17.22 L 18.64 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.39 L 12.00 21.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 17.22 L 5.36 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 12.00 L 2.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 6.78 L 5.36 5.36"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.61 L 12.00 2.61"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 6.78 L 18.64 5.36"
      }
    ]
  ]
};

export const UsignolGleam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 12.00 a 7.89 7.89 0 1 0 15.77 0 a 7.89 7.89 0 1 0 -15.77 0" />
      <path d="M 6.16 12.00 a 5.84 5.84 0 1 1 11.68 0 a 5.84 5.84 0 1 1 -11.68 0" />
      <path d="M 19.39 12.00 L 21.39 12.00" />
      <path d="M 17.22 17.22 L 18.64 18.64" />
      <path d="M 12.00 19.39 L 12.00 21.39" />
      <path d="M 6.78 17.22 L 5.36 18.64" />
      <path d="M 4.61 12.00 L 2.61 12.00" />
      <path d="M 6.78 6.78 L 5.36 5.36" />
      <path d="M 12.00 4.61 L 12.00 2.61" />
      <path d="M 17.22 6.78 L 18.64 5.36" />
      {children}
    </svg>
  );
});

export default UsignolGleam;
