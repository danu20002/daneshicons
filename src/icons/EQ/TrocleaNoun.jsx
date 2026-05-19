import React from 'react';

export const iconData = {
  "id": "TrocleaNoun",
  "name": "TrocleaNoun",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.35 16.26 L 5.90 9.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 16.26 L 12.76 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 16.26 L 18.81 9.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 16.26 L 12.56 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 16.26 L 14.60 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 9.51 L 18.81 9.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 9.51 L 12.56 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.76 3.10 L 12.56 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.76 3.10 L 14.60 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 18.81 9.89 L 12.56 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.56 18.16 L 14.60 14.90"
      }
    ],
    [
      "circle",
      {
        "cx": "9.35",
        "cy": "16.26",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.90",
        "cy": "9.51",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.76",
        "cy": "3.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.81",
        "cy": "9.89",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.56",
        "cy": "18.16",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.60",
        "cy": "14.90",
        "r": "1.5"
      }
    ]
  ]
};

export const TrocleaNoun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.35 16.26 L 5.90 9.51" />
      <path d="M 9.35 16.26 L 12.76 3.10" />
      <path d="M 9.35 16.26 L 18.81 9.89" />
      <path d="M 9.35 16.26 L 12.56 18.16" />
      <path d="M 9.35 16.26 L 14.60 14.90" />
      <path d="M 5.90 9.51 L 18.81 9.89" />
      <path d="M 5.90 9.51 L 12.56 18.16" />
      <path d="M 12.76 3.10 L 12.56 18.16" />
      <path d="M 12.76 3.10 L 14.60 14.90" />
      <path d="M 18.81 9.89 L 12.56 18.16" />
      <path d="M 12.56 18.16 L 14.60 14.90" />
      <circle cx="9.35" cy="16.26" r="1.5" />
      <circle cx="5.90" cy="9.51" r="1.5" />
      <circle cx="12.76" cy="3.10" r="1.5" />
      <circle cx="18.81" cy="9.89" r="1.5" />
      <circle cx="12.56" cy="18.16" r="1.5" />
      <circle cx="14.60" cy="14.90" r="1.5" />
      {children}
    </svg>
  );
});

export default TrocleaNoun;
