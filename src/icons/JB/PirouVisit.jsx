import React from 'react';

export const iconData = {
  "id": "PirouVisit",
  "name": "PirouVisit",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.28 8.10 L 12.05 14.95 L 11.85 20.52 L 2.59 21.61"
      }
    ],
    [
      "circle",
      {
        "cx": "17.28",
        "cy": "8.10",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "12.05",
        "cy": "14.95",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "11.85",
        "cy": "20.52",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "2.59",
        "cy": "21.61",
        "r": "1.23"
      }
    ]
  ]
};

export const PirouVisit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.28 8.10 L 12.05 14.95 L 11.85 20.52 L 2.59 21.61" />
      <circle cx="17.28" cy="8.10" r="1.14" />
      <circle cx="12.05" cy="14.95" r="0.54" />
      <circle cx="11.85" cy="20.52" r="0.89" />
      <circle cx="2.59" cy="21.61" r="1.23" />
      {children}
    </svg>
  );
});

export default PirouVisit;
