import React from 'react';

export const iconData = {
  "id": "MechaSymbol",
  "name": "MechaSymbol",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.58 5.62 L 19.98 21.64 L 9.28 10.47 L 7.40 5.21 L 10.37 10.34 L 18.71 9.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.58",
        "cy": "5.62",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "19.98",
        "cy": "21.64",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "9.28",
        "cy": "10.47",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "7.40",
        "cy": "5.21",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "10.37",
        "cy": "10.34",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.71",
        "cy": "9.31",
        "r": "1.16"
      }
    ]
  ]
};

export const MechaSymbol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.58 5.62 L 19.98 21.64 L 9.28 10.47 L 7.40 5.21 L 10.37 10.34 L 18.71 9.31" />
      <circle cx="10.58" cy="5.62" r="1.13" />
      <circle cx="19.98" cy="21.64" r="0.72" />
      <circle cx="9.28" cy="10.47" r="0.65" />
      <circle cx="7.40" cy="5.21" r="1.39" />
      <circle cx="10.37" cy="10.34" r="0.99" />
      <circle cx="18.71" cy="9.31" r="1.16" />
      {children}
    </svg>
  );
});

export default MechaSymbol;
