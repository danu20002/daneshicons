import React from 'react';

export const iconData = {
  "id": "NasoVia",
  "name": "NasoVia",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.23 4.64 L 14.92 17.87 L 20.78 20.27 L 5.21 7.20"
      }
    ],
    [
      "circle",
      {
        "cx": "2.23",
        "cy": "4.64",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.92",
        "cy": "17.87",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "20.78",
        "cy": "20.27",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "5.21",
        "cy": "7.20",
        "r": "1.13"
      }
    ]
  ]
};

export const NasoVia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.23 4.64 L 14.92 17.87 L 20.78 20.27 L 5.21 7.20" />
      <circle cx="2.23" cy="4.64" r="0.90" />
      <circle cx="14.92" cy="17.87" r="0.95" />
      <circle cx="20.78" cy="20.27" r="1.16" />
      <circle cx="5.21" cy="7.20" r="1.13" />
      {children}
    </svg>
  );
});

export default NasoVia;
