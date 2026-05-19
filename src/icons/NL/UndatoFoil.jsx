import React from 'react';

export const iconData = {
  "id": "UndatoFoil",
  "name": "UndatoFoil",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 14.30 L 17.08 20.98 L 14.90 9.53 L 12.33 14.48 L 4.11 18.29"
      }
    ],
    [
      "circle",
      {
        "cx": "3.77",
        "cy": "14.30",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "17.08",
        "cy": "20.98",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "14.90",
        "cy": "9.53",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "12.33",
        "cy": "14.48",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "4.11",
        "cy": "18.29",
        "r": "1.01"
      }
    ]
  ]
};

export const UndatoFoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 14.30 L 17.08 20.98 L 14.90 9.53 L 12.33 14.48 L 4.11 18.29" />
      <circle cx="3.77" cy="14.30" r="0.81" />
      <circle cx="17.08" cy="20.98" r="1.45" />
      <circle cx="14.90" cy="9.53" r="0.98" />
      <circle cx="12.33" cy="14.48" r="0.58" />
      <circle cx="4.11" cy="18.29" r="1.01" />
      {children}
    </svg>
  );
});

export default UndatoFoil;
