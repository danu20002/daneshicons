import React from 'react';

export const iconData = {
  "id": "TigroFate",
  "name": "TigroFate",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 6.36 L 10.52 7.37 L 19.79 9.14 L 5.12 9.65"
      }
    ],
    [
      "circle",
      {
        "cx": "9.92",
        "cy": "6.36",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "10.52",
        "cy": "7.37",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.79",
        "cy": "9.14",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "5.12",
        "cy": "9.65",
        "r": "0.60"
      }
    ]
  ]
};

export const TigroFate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 6.36 L 10.52 7.37 L 19.79 9.14 L 5.12 9.65" />
      <circle cx="9.92" cy="6.36" r="1.34" />
      <circle cx="10.52" cy="7.37" r="1.30" />
      <circle cx="19.79" cy="9.14" r="0.72" />
      <circle cx="5.12" cy="9.65" r="0.60" />
      {children}
    </svg>
  );
});

export default TigroFate;
