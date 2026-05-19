import React from 'react';

export const iconData = {
  "id": "SextoTall",
  "name": "SextoTall",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.29 19.45 L 4.08 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 19.45 L 13.10 13.24"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 19.45 L 14.13 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 20.08 L 18.70 7.03"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 7.03 L 14.13 20.64"
      }
    ],
    [
      "circle",
      {
        "cx": "14.29",
        "cy": "19.45",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.08",
        "cy": "20.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.70",
        "cy": "7.03",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.10",
        "cy": "13.24",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.13",
        "cy": "20.64",
        "r": "1.5"
      }
    ]
  ]
};

export const SextoTall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.29 19.45 L 4.08 20.08" />
      <path d="M 14.29 19.45 L 13.10 13.24" />
      <path d="M 14.29 19.45 L 14.13 20.64" />
      <path d="M 4.08 20.08 L 18.70 7.03" />
      <path d="M 18.70 7.03 L 14.13 20.64" />
      <circle cx="14.29" cy="19.45" r="1.5" />
      <circle cx="4.08" cy="20.08" r="1.5" />
      <circle cx="18.70" cy="7.03" r="1.5" />
      <circle cx="13.10" cy="13.24" r="1.5" />
      <circle cx="14.13" cy="20.64" r="1.5" />
      {children}
    </svg>
  );
});

export default SextoTall;
