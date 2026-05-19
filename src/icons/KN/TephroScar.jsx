import React from 'react';

export const iconData = {
  "id": "TephroScar",
  "name": "TephroScar",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 17.22 L 17.94 8.20 L 10.48 8.19 L 14.23 10.70 L 13.17 16.65 L 18.16 15.64"
      }
    ],
    [
      "circle",
      {
        "cx": "4.38",
        "cy": "17.22",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "17.94",
        "cy": "8.20",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.48",
        "cy": "8.19",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.23",
        "cy": "10.70",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "13.17",
        "cy": "16.65",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "18.16",
        "cy": "15.64",
        "r": "0.73"
      }
    ]
  ]
};

export const TephroScar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 17.22 L 17.94 8.20 L 10.48 8.19 L 14.23 10.70 L 13.17 16.65 L 18.16 15.64" />
      <circle cx="4.38" cy="17.22" r="1.34" />
      <circle cx="17.94" cy="8.20" r="0.79" />
      <circle cx="10.48" cy="8.19" r="1.41" />
      <circle cx="14.23" cy="10.70" r="1.45" />
      <circle cx="13.17" cy="16.65" r="1.25" />
      <circle cx="18.16" cy="15.64" r="0.73" />
      {children}
    </svg>
  );
});

export default TephroScar;
