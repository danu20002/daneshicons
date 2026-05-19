import React from 'react';

export const iconData = {
  "id": "VocalePier",
  "name": "VocalePier",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.21 9.38 C 9.77 11.94, 19.01 9.64, 19.65 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 2.18 C 6.01 5.84, 18.88 12.30, 15.23 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 6.28 C 18.01 10.49, 16.66 17.45, 20.41 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 6.74 C 11.91 14.26, 9.84 13.48, 15.51 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 9.80 C 13.18 17.15, 17.88 11.10, 15.03 14.54"
      }
    ]
  ]
};

export const VocalePier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.21 9.38 C 9.77 11.94, 19.01 9.64, 19.65 21.22" />
      <path d="M 5.66 2.18 C 6.01 5.84, 18.88 12.30, 15.23 15.03" />
      <path d="M 7.74 6.28 C 18.01 10.49, 16.66 17.45, 20.41 20.16" />
      <path d="M 9.16 6.74 C 11.91 14.26, 9.84 13.48, 15.51 16.82" />
      <path d="M 5.62 9.80 C 13.18 17.15, 17.88 11.10, 15.03 14.54" />
      {children}
    </svg>
  );
});

export default VocalePier;
