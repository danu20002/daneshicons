import React from 'react';

export const iconData = {
  "id": "CarnoMemento",
  "name": "CarnoMemento",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.81 8.48 L 19.14 11.64 L 10.62 18.00 L 16.30 12.22 L 15.16 16.59 L 15.18 9.28 L 5.41 15.62 L 6.02 11.70"
      }
    ],
    [
      "circle",
      {
        "cx": "2.81",
        "cy": "8.48",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "19.14",
        "cy": "11.64",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.62",
        "cy": "18.00",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "16.30",
        "cy": "12.22",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.16",
        "cy": "16.59",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "15.18",
        "cy": "9.28",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "5.41",
        "cy": "15.62",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.02",
        "cy": "11.70",
        "r": "0.73"
      }
    ]
  ]
};

export const CarnoMemento = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.81 8.48 L 19.14 11.64 L 10.62 18.00 L 16.30 12.22 L 15.16 16.59 L 15.18 9.28 L 5.41 15.62 L 6.02 11.70" />
      <circle cx="2.81" cy="8.48" r="1.13" />
      <circle cx="19.14" cy="11.64" r="1.47" />
      <circle cx="10.62" cy="18.00" r="1.47" />
      <circle cx="16.30" cy="12.22" r="1.09" />
      <circle cx="15.16" cy="16.59" r="1.38" />
      <circle cx="15.18" cy="9.28" r="0.67" />
      <circle cx="5.41" cy="15.62" r="1.46" />
      <circle cx="6.02" cy="11.70" r="0.73" />
      {children}
    </svg>
  );
});

export default CarnoMemento;
