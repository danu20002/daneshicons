import React from 'react';

export const iconData = {
  "id": "CarnoSwallow",
  "name": "CarnoSwallow",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.76 10.79 L 15.93 14.08 L 9.34 3.54 L 12.55 13.64 L 12.75 20.21 L 7.73 2.26"
      }
    ],
    [
      "circle",
      {
        "cx": "17.76",
        "cy": "10.79",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "15.93",
        "cy": "14.08",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "9.34",
        "cy": "3.54",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "12.55",
        "cy": "13.64",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "12.75",
        "cy": "20.21",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "7.73",
        "cy": "2.26",
        "r": "0.80"
      }
    ]
  ]
};

export const CarnoSwallow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.76 10.79 L 15.93 14.08 L 9.34 3.54 L 12.55 13.64 L 12.75 20.21 L 7.73 2.26" />
      <circle cx="17.76" cy="10.79" r="1.13" />
      <circle cx="15.93" cy="14.08" r="1.18" />
      <circle cx="9.34" cy="3.54" r="1.12" />
      <circle cx="12.55" cy="13.64" r="1.13" />
      <circle cx="12.75" cy="20.21" r="1.25" />
      <circle cx="7.73" cy="2.26" r="0.80" />
      {children}
    </svg>
  );
});

export default CarnoSwallow;
