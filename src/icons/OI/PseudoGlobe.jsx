import React from 'react';

export const iconData = {
  "id": "PseudoGlobe",
  "name": "PseudoGlobe",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 1 10.67 0 a 5.34 5.34 0 1 1 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 12.00 L 21.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 17.58 L 17.70 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.96 L 9.97 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 15.10 L 3.77 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 8.90 L 3.77 8.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.04 L 9.97 3.09"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 6.42 L 17.70 4.85"
      }
    ]
  ]
};

export const PseudoGlobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 1 10.67 0 a 5.34 5.34 0 1 1 -10.67 0" />
      <path d="M 19.14 12.00 L 21.14 12.00" />
      <path d="M 16.45 17.58 L 17.70 19.15" />
      <path d="M 10.41 18.96 L 9.97 20.91" />
      <path d="M 5.57 15.10 L 3.77 15.97" />
      <path d="M 5.57 8.90 L 3.77 8.03" />
      <path d="M 10.41 5.04 L 9.97 3.09" />
      <path d="M 16.45 6.42 L 17.70 4.85" />
      {children}
    </svg>
  );
});

export default PseudoGlobe;
