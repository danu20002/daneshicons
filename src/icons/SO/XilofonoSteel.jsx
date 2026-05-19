import React from 'react';

export const iconData = {
  "id": "XilofonoSteel",
  "name": "XilofonoSteel",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.21 10.15 L 7.11 3.82 L 9.60 19.68 L 9.17 4.07 L 10.11 15.93 L 6.80 18.74 L 19.08 17.55 L 2.15 17.41"
      }
    ],
    [
      "circle",
      {
        "cx": "12.21",
        "cy": "10.15",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "7.11",
        "cy": "3.82",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "9.60",
        "cy": "19.68",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "9.17",
        "cy": "4.07",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.11",
        "cy": "15.93",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.80",
        "cy": "18.74",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "19.08",
        "cy": "17.55",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "2.15",
        "cy": "17.41",
        "r": "0.94"
      }
    ]
  ]
};

export const XilofonoSteel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.21 10.15 L 7.11 3.82 L 9.60 19.68 L 9.17 4.07 L 10.11 15.93 L 6.80 18.74 L 19.08 17.55 L 2.15 17.41" />
      <circle cx="12.21" cy="10.15" r="1.23" />
      <circle cx="7.11" cy="3.82" r="1.19" />
      <circle cx="9.60" cy="19.68" r="1.34" />
      <circle cx="9.17" cy="4.07" r="1.45" />
      <circle cx="10.11" cy="15.93" r="0.56" />
      <circle cx="6.80" cy="18.74" r="1.49" />
      <circle cx="19.08" cy="17.55" r="1.15" />
      <circle cx="2.15" cy="17.41" r="0.94" />
      {children}
    </svg>
  );
});

export default XilofonoSteel;
