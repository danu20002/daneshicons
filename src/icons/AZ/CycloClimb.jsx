import React from 'react';

export const iconData = {
  "id": "CycloClimb",
  "name": "CycloClimb",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 13.59 L 14.51 3.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.62 14.38 L 16.07 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 16.40 L 14.51 3.62"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 7.16 L 14.51 3.62"
      }
    ],
    [
      "circle",
      {
        "cx": "6.46",
        "cy": "13.59",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.62",
        "cy": "14.38",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.07",
        "cy": "16.40",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.88",
        "cy": "7.16",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.51",
        "cy": "3.62",
        "r": "1.5"
      }
    ]
  ]
};

export const CycloClimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 13.59 L 14.51 3.62" />
      <path d="M 12.62 14.38 L 16.07 16.40" />
      <path d="M 16.07 16.40 L 14.51 3.62" />
      <path d="M 14.88 7.16 L 14.51 3.62" />
      <circle cx="6.46" cy="13.59" r="1.5" />
      <circle cx="12.62" cy="14.38" r="1.5" />
      <circle cx="16.07" cy="16.40" r="1.5" />
      <circle cx="14.88" cy="7.16" r="1.5" />
      <circle cx="14.51" cy="3.62" r="1.5" />
      {children}
    </svg>
  );
});

export default CycloClimb;
