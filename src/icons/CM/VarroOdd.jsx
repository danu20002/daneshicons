import React from 'react';

export const iconData = {
  "id": "VarroOdd",
  "name": "VarroOdd",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.79 6.59 L 4.53 3.90 L 4.70 14.99 L 8.12 11.14 L 3.46 9.22 L 18.11 3.72"
      }
    ],
    [
      "circle",
      {
        "cx": "17.79",
        "cy": "6.59",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "4.53",
        "cy": "3.90",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.70",
        "cy": "14.99",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "8.12",
        "cy": "11.14",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "3.46",
        "cy": "9.22",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.11",
        "cy": "3.72",
        "r": "1.11"
      }
    ]
  ]
};

export const VarroOdd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.79 6.59 L 4.53 3.90 L 4.70 14.99 L 8.12 11.14 L 3.46 9.22 L 18.11 3.72" />
      <circle cx="17.79" cy="6.59" r="0.67" />
      <circle cx="4.53" cy="3.90" r="1.24" />
      <circle cx="4.70" cy="14.99" r="0.58" />
      <circle cx="8.12" cy="11.14" r="0.52" />
      <circle cx="3.46" cy="9.22" r="1.02" />
      <circle cx="18.11" cy="3.72" r="1.11" />
      {children}
    </svg>
  );
});

export default VarroOdd;
