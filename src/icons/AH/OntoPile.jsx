import React from 'react';

export const iconData = {
  "id": "OntoPile",
  "name": "OntoPile",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.31 16.15 L 15.71 6.36 L 9.28 18.48 L 2.65 8.19 L 13.40 20.88 L 16.32 19.37 L 7.52 17.55 L 10.54 5.36"
      }
    ],
    [
      "circle",
      {
        "cx": "19.31",
        "cy": "16.15",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "15.71",
        "cy": "6.36",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "9.28",
        "cy": "18.48",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "2.65",
        "cy": "8.19",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "13.40",
        "cy": "20.88",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "16.32",
        "cy": "19.37",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "7.52",
        "cy": "17.55",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "10.54",
        "cy": "5.36",
        "r": "0.65"
      }
    ]
  ]
};

export const OntoPile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.31 16.15 L 15.71 6.36 L 9.28 18.48 L 2.65 8.19 L 13.40 20.88 L 16.32 19.37 L 7.52 17.55 L 10.54 5.36" />
      <circle cx="19.31" cy="16.15" r="0.80" />
      <circle cx="15.71" cy="6.36" r="0.77" />
      <circle cx="9.28" cy="18.48" r="0.63" />
      <circle cx="2.65" cy="8.19" r="1.30" />
      <circle cx="13.40" cy="20.88" r="1.28" />
      <circle cx="16.32" cy="19.37" r="0.99" />
      <circle cx="7.52" cy="17.55" r="1.34" />
      <circle cx="10.54" cy="5.36" r="0.65" />
      {children}
    </svg>
  );
});

export default OntoPile;
