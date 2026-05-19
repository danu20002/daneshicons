import React from 'react';

export const iconData = {
  "id": "TurbinoHurry",
  "name": "TurbinoHurry",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.43 3.17 L 8.33 10.65 L 16.36 2.47 L 7.30 4.84 L 2.92 17.00"
      }
    ],
    [
      "circle",
      {
        "cx": "21.43",
        "cy": "3.17",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "8.33",
        "cy": "10.65",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "16.36",
        "cy": "2.47",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "7.30",
        "cy": "4.84",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "2.92",
        "cy": "17.00",
        "r": "0.60"
      }
    ]
  ]
};

export const TurbinoHurry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.43 3.17 L 8.33 10.65 L 16.36 2.47 L 7.30 4.84 L 2.92 17.00" />
      <circle cx="21.43" cy="3.17" r="0.83" />
      <circle cx="8.33" cy="10.65" r="0.79" />
      <circle cx="16.36" cy="2.47" r="0.92" />
      <circle cx="7.30" cy="4.84" r="0.56" />
      <circle cx="2.92" cy="17.00" r="0.60" />
      {children}
    </svg>
  );
});

export default TurbinoHurry;
