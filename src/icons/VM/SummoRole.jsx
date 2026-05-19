import React from 'react';

export const iconData = {
  "id": "SummoRole",
  "name": "SummoRole",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.89 4.00 L 19.23 19.13 L 13.29 8.93 L 12.41 8.84 L 10.46 5.64 L 15.50 3.86 L 11.94 9.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.89",
        "cy": "4.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "19.23",
        "cy": "19.13",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "13.29",
        "cy": "8.93",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "12.41",
        "cy": "8.84",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.46",
        "cy": "5.64",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "15.50",
        "cy": "3.86",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "11.94",
        "cy": "9.48",
        "r": "0.74"
      }
    ]
  ]
};

export const SummoRole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.89 4.00 L 19.23 19.13 L 13.29 8.93 L 12.41 8.84 L 10.46 5.64 L 15.50 3.86 L 11.94 9.48" />
      <circle cx="7.89" cy="4.00" r="1.03" />
      <circle cx="19.23" cy="19.13" r="1.03" />
      <circle cx="13.29" cy="8.93" r="1.19" />
      <circle cx="12.41" cy="8.84" r="0.83" />
      <circle cx="10.46" cy="5.64" r="0.78" />
      <circle cx="15.50" cy="3.86" r="1.28" />
      <circle cx="11.94" cy="9.48" r="0.74" />
      {children}
    </svg>
  );
});

export default SummoRole;
