import React from 'react';

export const iconData = {
  "id": "ScorpiEstate",
  "name": "ScorpiEstate",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 2.6205084303393957 0 1 0 17.47 0 a 8.74 2.6205084303393957 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 5.82 A 2 2 0 0 0 18.18 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 5.82 A 2 2 0 0 1 18.18 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.26 A 2 2 0 0 0 12.00 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.26 A 2 2 0 0 1 12.00 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 5.82 A 2 2 0 0 0 5.82 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 5.82 A 2 2 0 0 1 5.82 18.18"
      }
    ]
  ]
};

export const ScorpiEstate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0" />
      <path d="M 3.26 12.00 a 8.74 2.6205084303393957 0 1 0 17.47 0 a 8.74 2.6205084303393957 0 1 0 -17.47 0" />
      <path d="M 18.18 5.82 A 2 2 0 0 0 18.18 18.18" />
      <path d="M 18.18 5.82 A 2 2 0 0 1 18.18 18.18" />
      <path d="M 12.00 3.26 A 2 2 0 0 0 12.00 20.74" />
      <path d="M 12.00 3.26 A 2 2 0 0 1 12.00 20.74" />
      <path d="M 5.82 5.82 A 2 2 0 0 0 5.82 18.18" />
      <path d="M 5.82 5.82 A 2 2 0 0 1 5.82 18.18" />
      {children}
    </svg>
  );
});

export default ScorpiEstate;
