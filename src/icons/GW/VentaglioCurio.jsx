import React from 'react';

export const iconData = {
  "id": "VentaglioCurio",
  "name": "VentaglioCurio",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 17.93 L 8.14 13.90 L 2.30 11.90 L 20.84 9.83 L 9.34 3.57 L 7.03 19.27 L 21.05 5.31 L 15.83 7.21"
      }
    ],
    [
      "circle",
      {
        "cx": "9.04",
        "cy": "17.93",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "8.14",
        "cy": "13.90",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "2.30",
        "cy": "11.90",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "20.84",
        "cy": "9.83",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "9.34",
        "cy": "3.57",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "7.03",
        "cy": "19.27",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "21.05",
        "cy": "5.31",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.83",
        "cy": "7.21",
        "r": "1.42"
      }
    ]
  ]
};

export const VentaglioCurio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 17.93 L 8.14 13.90 L 2.30 11.90 L 20.84 9.83 L 9.34 3.57 L 7.03 19.27 L 21.05 5.31 L 15.83 7.21" />
      <circle cx="9.04" cy="17.93" r="0.91" />
      <circle cx="8.14" cy="13.90" r="0.81" />
      <circle cx="2.30" cy="11.90" r="0.64" />
      <circle cx="20.84" cy="9.83" r="1.07" />
      <circle cx="9.34" cy="3.57" r="1.21" />
      <circle cx="7.03" cy="19.27" r="0.58" />
      <circle cx="21.05" cy="5.31" r="0.92" />
      <circle cx="15.83" cy="7.21" r="1.42" />
      {children}
    </svg>
  );
});

export default VentaglioCurio;
