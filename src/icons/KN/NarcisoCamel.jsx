import React from 'react';

export const iconData = {
  "id": "NarcisoCamel",
  "name": "NarcisoCamel",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.85 17.93 L 6.63 4.11 L 21.28 6.02 L 19.37 15.71 L 12.39 3.97 L 21.47 18.63 L 20.89 9.70"
      }
    ],
    [
      "circle",
      {
        "cx": "17.85",
        "cy": "17.93",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.63",
        "cy": "4.11",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "21.28",
        "cy": "6.02",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "19.37",
        "cy": "15.71",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "12.39",
        "cy": "3.97",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "21.47",
        "cy": "18.63",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "20.89",
        "cy": "9.70",
        "r": "0.54"
      }
    ]
  ]
};

export const NarcisoCamel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.85 17.93 L 6.63 4.11 L 21.28 6.02 L 19.37 15.71 L 12.39 3.97 L 21.47 18.63 L 20.89 9.70" />
      <circle cx="17.85" cy="17.93" r="0.72" />
      <circle cx="6.63" cy="4.11" r="0.91" />
      <circle cx="21.28" cy="6.02" r="1.12" />
      <circle cx="19.37" cy="15.71" r="0.65" />
      <circle cx="12.39" cy="3.97" r="0.55" />
      <circle cx="21.47" cy="18.63" r="0.83" />
      <circle cx="20.89" cy="9.70" r="0.54" />
      {children}
    </svg>
  );
});

export default NarcisoCamel;
