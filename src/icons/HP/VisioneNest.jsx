import React from 'react';

export const iconData = {
  "id": "VisioneNest",
  "name": "VisioneNest",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.80 7.77 L 4.90 3.90 L 9.20 19.08 L 2.65 12.58 L 7.70 17.98 L 9.22 20.06 L 8.51 12.13"
      }
    ],
    [
      "circle",
      {
        "cx": "17.80",
        "cy": "7.77",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "4.90",
        "cy": "3.90",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.20",
        "cy": "19.08",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "2.65",
        "cy": "12.58",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "7.70",
        "cy": "17.98",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "9.22",
        "cy": "20.06",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "8.51",
        "cy": "12.13",
        "r": "0.85"
      }
    ]
  ]
};

export const VisioneNest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.80 7.77 L 4.90 3.90 L 9.20 19.08 L 2.65 12.58 L 7.70 17.98 L 9.22 20.06 L 8.51 12.13" />
      <circle cx="17.80" cy="7.77" r="1.00" />
      <circle cx="4.90" cy="3.90" r="0.73" />
      <circle cx="9.20" cy="19.08" r="0.57" />
      <circle cx="2.65" cy="12.58" r="0.53" />
      <circle cx="7.70" cy="17.98" r="0.61" />
      <circle cx="9.22" cy="20.06" r="1.05" />
      <circle cx="8.51" cy="12.13" r="0.85" />
      {children}
    </svg>
  );
});

export default VisioneNest;
