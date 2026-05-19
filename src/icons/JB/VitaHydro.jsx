import React from 'react';

export const iconData = {
  "id": "VitaHydro",
  "name": "VitaHydro",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 9.58 L 8.33 15.94 L 10.90 13.08 L 18.89 3.81"
      }
    ],
    [
      "circle",
      {
        "cx": "3.82",
        "cy": "9.58",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.33",
        "cy": "15.94",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.90",
        "cy": "13.08",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.89",
        "cy": "3.81",
        "r": "0.72"
      }
    ]
  ]
};

export const VitaHydro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 9.58 L 8.33 15.94 L 10.90 13.08 L 18.89 3.81" />
      <circle cx="3.82" cy="9.58" r="0.87" />
      <circle cx="8.33" cy="15.94" r="1.48" />
      <circle cx="10.90" cy="13.08" r="0.96" />
      <circle cx="18.89" cy="3.81" r="0.72" />
      {children}
    </svg>
  );
});

export default VitaHydro;
