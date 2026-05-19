import React from 'react';

export const iconData = {
  "id": "ElectroPrize",
  "name": "ElectroPrize",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 20.87 L 10.33 20.59 L 16.23 9.88 L 7.03 4.05 L 17.77 21.39 L 13.14 19.72 L 14.78 2.82"
      }
    ],
    [
      "circle",
      {
        "cx": "2.24",
        "cy": "20.87",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.33",
        "cy": "20.59",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "16.23",
        "cy": "9.88",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "7.03",
        "cy": "4.05",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "17.77",
        "cy": "21.39",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "13.14",
        "cy": "19.72",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "14.78",
        "cy": "2.82",
        "r": "1.19"
      }
    ]
  ]
};

export const ElectroPrize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 20.87 L 10.33 20.59 L 16.23 9.88 L 7.03 4.05 L 17.77 21.39 L 13.14 19.72 L 14.78 2.82" />
      <circle cx="2.24" cy="20.87" r="0.65" />
      <circle cx="10.33" cy="20.59" r="1.32" />
      <circle cx="16.23" cy="9.88" r="0.50" />
      <circle cx="7.03" cy="4.05" r="1.00" />
      <circle cx="17.77" cy="21.39" r="1.41" />
      <circle cx="13.14" cy="19.72" r="0.87" />
      <circle cx="14.78" cy="2.82" r="1.19" />
      {children}
    </svg>
  );
});

export default ElectroPrize;
