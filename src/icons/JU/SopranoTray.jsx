import React from 'react';

export const iconData = {
  "id": "SopranoTray",
  "name": "SopranoTray",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.61 11.27 L 17.74 9.95 L 2.98 3.21 L 2.78 12.86 L 8.93 3.04"
      }
    ],
    [
      "circle",
      {
        "cx": "12.61",
        "cy": "11.27",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.74",
        "cy": "9.95",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "2.98",
        "cy": "3.21",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "2.78",
        "cy": "12.86",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "8.93",
        "cy": "3.04",
        "r": "1.13"
      }
    ]
  ]
};

export const SopranoTray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.61 11.27 L 17.74 9.95 L 2.98 3.21 L 2.78 12.86 L 8.93 3.04" />
      <circle cx="12.61" cy="11.27" r="0.76" />
      <circle cx="17.74" cy="9.95" r="0.58" />
      <circle cx="2.98" cy="3.21" r="1.36" />
      <circle cx="2.78" cy="12.86" r="0.76" />
      <circle cx="8.93" cy="3.04" r="1.13" />
      {children}
    </svg>
  );
});

export default SopranoTray;
