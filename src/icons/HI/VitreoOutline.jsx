import React from 'react';

export const iconData = {
  "id": "VitreoOutline",
  "name": "VitreoOutline",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.95 6.35 C 5.33 14.84, 17.16 4.84, 20.92 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 8.04 C 5.69 12.19, 19.89 7.91, 19.41 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 5.50 C 14.51 18.63, 17.84 6.18, 17.04 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 5.70 C 18.86 18.05, 18.90 7.33, 19.52 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.32 C 10.42 16.36, 5.77 10.13, 18.31 16.89"
      }
    ]
  ]
};

export const VitreoOutline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.95 6.35 C 5.33 14.84, 17.16 4.84, 20.92 20.25" />
      <path d="M 8.28 8.04 C 5.69 12.19, 19.89 7.91, 19.41 19.55" />
      <path d="M 6.10 5.50 C 14.51 18.63, 17.84 6.18, 17.04 15.35" />
      <path d="M 5.03 5.70 C 18.86 18.05, 18.90 7.33, 19.52 16.01" />
      <path d="M 4.77 6.32 C 10.42 16.36, 5.77 10.13, 18.31 16.89" />
      {children}
    </svg>
  );
});

export default VitreoOutline;
