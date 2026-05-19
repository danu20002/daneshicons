import React from 'react';

export const iconData = {
  "id": "StyloLaser",
  "name": "StyloLaser",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.88 12.00 a 9.12 9.12 0 1 0 18.24 0 a 9.12 9.12 0 1 0 -18.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 7.44 a 7.90 2.3694820321377144 0 1 0 15.80 0 a 7.90 2.3694820321377144 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 12.00 a 9.12 2.736042178189382 0 1 0 18.24 0 a 9.12 2.736042178189382 0 1 0 -18.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 16.56 a 7.90 2.3694820321377144 0 1 0 15.80 0 a 7.90 2.3694820321377144 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 5.55 A 2 2 0 0 0 18.45 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 5.55 A 2 2 0 0 1 18.45 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.88 A 2 2 0 0 0 12.00 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.88 A 2 2 0 0 1 12.00 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 5.55 A 2 2 0 0 0 5.55 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 5.55 A 2 2 0 0 1 5.55 18.45"
      }
    ]
  ]
};

export const StyloLaser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.88 12.00 a 9.12 9.12 0 1 0 18.24 0 a 9.12 9.12 0 1 0 -18.24 0" />
      <path d="M 4.10 7.44 a 7.90 2.3694820321377144 0 1 0 15.80 0 a 7.90 2.3694820321377144 0 1 0 -15.80 0" />
      <path d="M 2.88 12.00 a 9.12 2.736042178189382 0 1 0 18.24 0 a 9.12 2.736042178189382 0 1 0 -18.24 0" />
      <path d="M 4.10 16.56 a 7.90 2.3694820321377144 0 1 0 15.80 0 a 7.90 2.3694820321377144 0 1 0 -15.80 0" />
      <path d="M 18.45 5.55 A 2 2 0 0 0 18.45 18.45" />
      <path d="M 18.45 5.55 A 2 2 0 0 1 18.45 18.45" />
      <path d="M 12.00 2.88 A 2 2 0 0 0 12.00 21.12" />
      <path d="M 12.00 2.88 A 2 2 0 0 1 12.00 21.12" />
      <path d="M 5.55 5.55 A 2 2 0 0 0 5.55 18.45" />
      <path d="M 5.55 5.55 A 2 2 0 0 1 5.55 18.45" />
      {children}
    </svg>
  );
});

export default StyloLaser;
