import React from 'react';

export const iconData = {
  "id": "TaloNest",
  "name": "TaloNest",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.78 19.56 L 3.30 12.31 L 2.64 21.75 L 2.71 18.13 L 16.71 2.48 L 18.73 19.86 L 18.90 11.04 L 2.13 13.23"
      }
    ],
    [
      "circle",
      {
        "cx": "6.78",
        "cy": "19.56",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "3.30",
        "cy": "12.31",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "2.64",
        "cy": "21.75",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "2.71",
        "cy": "18.13",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "16.71",
        "cy": "2.48",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "18.73",
        "cy": "19.86",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "18.90",
        "cy": "11.04",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "2.13",
        "cy": "13.23",
        "r": "0.73"
      }
    ]
  ]
};

export const TaloNest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.78 19.56 L 3.30 12.31 L 2.64 21.75 L 2.71 18.13 L 16.71 2.48 L 18.73 19.86 L 18.90 11.04 L 2.13 13.23" />
      <circle cx="6.78" cy="19.56" r="1.12" />
      <circle cx="3.30" cy="12.31" r="1.23" />
      <circle cx="2.64" cy="21.75" r="1.23" />
      <circle cx="2.71" cy="18.13" r="1.26" />
      <circle cx="16.71" cy="2.48" r="0.83" />
      <circle cx="18.73" cy="19.86" r="1.14" />
      <circle cx="18.90" cy="11.04" r="1.44" />
      <circle cx="2.13" cy="13.23" r="0.73" />
      {children}
    </svg>
  );
});

export default TaloNest;
