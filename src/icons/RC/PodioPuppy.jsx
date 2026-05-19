import React from 'react';

export const iconData = {
  "id": "PodioPuppy",
  "name": "PodioPuppy",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.03 17.62 L 6.38 19.49 L 11.67 11.39 L 20.36 5.80 L 10.70 4.85"
      }
    ],
    [
      "circle",
      {
        "cx": "13.03",
        "cy": "17.62",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "6.38",
        "cy": "19.49",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "11.67",
        "cy": "11.39",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "20.36",
        "cy": "5.80",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.70",
        "cy": "4.85",
        "r": "1.31"
      }
    ]
  ]
};

export const PodioPuppy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.03 17.62 L 6.38 19.49 L 11.67 11.39 L 20.36 5.80 L 10.70 4.85" />
      <circle cx="13.03" cy="17.62" r="1.23" />
      <circle cx="6.38" cy="19.49" r="1.09" />
      <circle cx="11.67" cy="11.39" r="1.28" />
      <circle cx="20.36" cy="5.80" r="0.74" />
      <circle cx="10.70" cy="4.85" r="1.31" />
      {children}
    </svg>
  );
});

export default PodioPuppy;
