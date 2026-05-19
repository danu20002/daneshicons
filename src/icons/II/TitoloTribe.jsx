import React from 'react';

export const iconData = {
  "id": "TitoloTribe",
  "name": "TitoloTribe",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.34 5.34 L 18.73 8.74 L 10.72 20.50 L 7.92 13.05 L 4.40 18.09"
      }
    ],
    [
      "circle",
      {
        "cx": "20.34",
        "cy": "5.34",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.73",
        "cy": "8.74",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "10.72",
        "cy": "20.50",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "7.92",
        "cy": "13.05",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "4.40",
        "cy": "18.09",
        "r": "1.36"
      }
    ]
  ]
};

export const TitoloTribe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.34 5.34 L 18.73 8.74 L 10.72 20.50 L 7.92 13.05 L 4.40 18.09" />
      <circle cx="20.34" cy="5.34" r="0.59" />
      <circle cx="18.73" cy="8.74" r="0.51" />
      <circle cx="10.72" cy="20.50" r="1.14" />
      <circle cx="7.92" cy="13.05" r="1.11" />
      <circle cx="4.40" cy="18.09" r="1.36" />
      {children}
    </svg>
  );
});

export default TitoloTribe;
