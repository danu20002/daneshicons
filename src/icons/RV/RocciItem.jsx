import React from 'react';

export const iconData = {
  "id": "RocciItem",
  "name": "RocciItem",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.68 8.40 L 13.92 19.73 L 3.56 8.15 L 7.47 11.41 L 13.69 8.28 L 4.80 5.38 L 4.09 4.99 L 12.72 17.10"
      }
    ],
    [
      "circle",
      {
        "cx": "7.68",
        "cy": "8.40",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "13.92",
        "cy": "19.73",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "3.56",
        "cy": "8.15",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "7.47",
        "cy": "11.41",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "13.69",
        "cy": "8.28",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "4.80",
        "cy": "5.38",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "4.09",
        "cy": "4.99",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "12.72",
        "cy": "17.10",
        "r": "0.90"
      }
    ]
  ]
};

export const RocciItem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.68 8.40 L 13.92 19.73 L 3.56 8.15 L 7.47 11.41 L 13.69 8.28 L 4.80 5.38 L 4.09 4.99 L 12.72 17.10" />
      <circle cx="7.68" cy="8.40" r="0.64" />
      <circle cx="13.92" cy="19.73" r="1.09" />
      <circle cx="3.56" cy="8.15" r="0.66" />
      <circle cx="7.47" cy="11.41" r="0.63" />
      <circle cx="13.69" cy="8.28" r="1.13" />
      <circle cx="4.80" cy="5.38" r="1.04" />
      <circle cx="4.09" cy="4.99" r="0.87" />
      <circle cx="12.72" cy="17.10" r="0.90" />
      {children}
    </svg>
  );
});

export default RocciItem;
