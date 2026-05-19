import React from 'react';

export const iconData = {
  "id": "PartiHut",
  "name": "PartiHut",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.37 15.27 Q 20.21 16.96 17.93 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 9.62 L 13.31 13.96"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 19.76 A 4.24 4.24 168 0 0 5.68 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 5.75 L 8.48 5.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 7.85 A 5.32 4.24 47 0 1 9.65 8.66"
      }
    ],
    [
      "path",
      {
        "d": "M 16.51 12.08 A 5.36 5.55 77 0 0 11.78 20.43"
      }
    ]
  ]
};

export const PartiHut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.37 15.27 Q 20.21 16.96 17.93 21.96" />
      <path d="M 3.49 9.62 L 13.31 13.96" />
      <path d="M 19.49 19.76 A 4.24 4.24 168 0 0 5.68 17.94" />
      <path d="M 3.31 5.75 L 8.48 5.85" />
      <path d="M 17.01 7.85 A 5.32 4.24 47 0 1 9.65 8.66" />
      <path d="M 16.51 12.08 A 5.36 5.55 77 0 0 11.78 20.43" />
      {children}
    </svg>
  );
});

export default PartiHut;
