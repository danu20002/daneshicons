import React from 'react';

export const iconData = {
  "id": "RubroMineral",
  "name": "RubroMineral",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.24 18.50 L 12.89 8.54 L 9.12 11.91 L 15.07 13.20 L 8.15 2.55 L 7.46 6.39 L 18.97 12.28"
      }
    ],
    [
      "circle",
      {
        "cx": "5.24",
        "cy": "18.50",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "12.89",
        "cy": "8.54",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "9.12",
        "cy": "11.91",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "15.07",
        "cy": "13.20",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.15",
        "cy": "2.55",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "7.46",
        "cy": "6.39",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "18.97",
        "cy": "12.28",
        "r": "1.30"
      }
    ]
  ]
};

export const RubroMineral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.24 18.50 L 12.89 8.54 L 9.12 11.91 L 15.07 13.20 L 8.15 2.55 L 7.46 6.39 L 18.97 12.28" />
      <circle cx="5.24" cy="18.50" r="1.48" />
      <circle cx="12.89" cy="8.54" r="0.87" />
      <circle cx="9.12" cy="11.91" r="1.26" />
      <circle cx="15.07" cy="13.20" r="0.79" />
      <circle cx="8.15" cy="2.55" r="1.08" />
      <circle cx="7.46" cy="6.39" r="1.29" />
      <circle cx="18.97" cy="12.28" r="1.30" />
      {children}
    </svg>
  );
});

export default RubroMineral;
