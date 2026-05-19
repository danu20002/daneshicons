import React from 'react';

export const iconData = {
  "id": "PrimoDown",
  "name": "PrimoDown",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 12.00 a 7.70 7.70 0 1 0 15.40 0 a 7.70 7.70 0 1 0 -15.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 12.00 a 5.95 5.95 0 1 1 11.91 0 a 5.95 5.95 0 1 1 -11.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 12.00 L 21.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 16.63 L 19.05 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 19.09 L 13.60 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 18.23 L 7.40 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 14.46 L 3.36 15.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 9.54 L 3.36 8.85"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 5.77 L 7.40 4.03"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 4.91 L 13.60 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 7.37 L 19.05 6.09"
      }
    ]
  ]
};

export const PrimoDown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 12.00 a 7.70 7.70 0 1 0 15.40 0 a 7.70 7.70 0 1 0 -15.40 0" />
      <path d="M 6.05 12.00 a 5.95 5.95 0 1 1 11.91 0 a 5.95 5.95 0 1 1 -11.91 0" />
      <path d="M 19.20 12.00 L 21.20 12.00" />
      <path d="M 17.52 16.63 L 19.05 17.91" />
      <path d="M 13.25 19.09 L 13.60 21.06" />
      <path d="M 8.40 18.23 L 7.40 19.97" />
      <path d="M 5.23 14.46 L 3.36 15.15" />
      <path d="M 5.23 9.54 L 3.36 8.85" />
      <path d="M 8.40 5.77 L 7.40 4.03" />
      <path d="M 13.25 4.91 L 13.60 2.94" />
      <path d="M 17.52 7.37 L 19.05 6.09" />
      {children}
    </svg>
  );
});

export default PrimoDown;
