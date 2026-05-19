import React from 'react';

export const iconData = {
  "id": "UniSea",
  "name": "UniSea",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.25 10.51 L 21.49 16.28 L 16.25 6.30 L 3.39 8.47 L 2.60 15.76"
      }
    ],
    [
      "circle",
      {
        "cx": "16.25",
        "cy": "10.51",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "21.49",
        "cy": "16.28",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "16.25",
        "cy": "6.30",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "3.39",
        "cy": "8.47",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "2.60",
        "cy": "15.76",
        "r": "0.98"
      }
    ]
  ]
};

export const UniSea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.25 10.51 L 21.49 16.28 L 16.25 6.30 L 3.39 8.47 L 2.60 15.76" />
      <circle cx="16.25" cy="10.51" r="0.52" />
      <circle cx="21.49" cy="16.28" r="0.57" />
      <circle cx="16.25" cy="6.30" r="1.07" />
      <circle cx="3.39" cy="8.47" r="1.02" />
      <circle cx="2.60" cy="15.76" r="0.98" />
      {children}
    </svg>
  );
});

export default UniSea;
