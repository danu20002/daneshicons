import React from 'react';

export const iconData = {
  "id": "TritoLump",
  "name": "TritoLump",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.71 21.80 L 17.46 6.01 L 11.84 10.44 L 21.98 2.74 L 21.77 9.11 L 4.38 10.70 L 5.79 14.69"
      }
    ],
    [
      "circle",
      {
        "cx": "20.71",
        "cy": "21.80",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.46",
        "cy": "6.01",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "11.84",
        "cy": "10.44",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "21.98",
        "cy": "2.74",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "21.77",
        "cy": "9.11",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "4.38",
        "cy": "10.70",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "5.79",
        "cy": "14.69",
        "r": "1.40"
      }
    ]
  ]
};

export const TritoLump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.71 21.80 L 17.46 6.01 L 11.84 10.44 L 21.98 2.74 L 21.77 9.11 L 4.38 10.70 L 5.79 14.69" />
      <circle cx="20.71" cy="21.80" r="1.38" />
      <circle cx="17.46" cy="6.01" r="1.10" />
      <circle cx="11.84" cy="10.44" r="1.13" />
      <circle cx="21.98" cy="2.74" r="0.88" />
      <circle cx="21.77" cy="9.11" r="0.72" />
      <circle cx="4.38" cy="10.70" r="0.85" />
      <circle cx="5.79" cy="14.69" r="1.40" />
      {children}
    </svg>
  );
});

export default TritoLump;
