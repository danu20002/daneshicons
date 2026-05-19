import React from 'react';

export const iconData = {
  "id": "NectoPelt",
  "name": "NectoPelt",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.51 17.17 L 21.51 10.29 L 14.95 6.17 L 9.98 3.99 L 20.02 3.93 L 8.84 11.20 L 21.64 7.27"
      }
    ],
    [
      "circle",
      {
        "cx": "10.51",
        "cy": "17.17",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "21.51",
        "cy": "10.29",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "14.95",
        "cy": "6.17",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "9.98",
        "cy": "3.99",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "20.02",
        "cy": "3.93",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.84",
        "cy": "11.20",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "21.64",
        "cy": "7.27",
        "r": "0.91"
      }
    ]
  ]
};

export const NectoPelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.51 17.17 L 21.51 10.29 L 14.95 6.17 L 9.98 3.99 L 20.02 3.93 L 8.84 11.20 L 21.64 7.27" />
      <circle cx="10.51" cy="17.17" r="1.00" />
      <circle cx="21.51" cy="10.29" r="0.55" />
      <circle cx="14.95" cy="6.17" r="0.79" />
      <circle cx="9.98" cy="3.99" r="0.64" />
      <circle cx="20.02" cy="3.93" r="0.57" />
      <circle cx="8.84" cy="11.20" r="0.97" />
      <circle cx="21.64" cy="7.27" r="0.91" />
      {children}
    </svg>
  );
});

export default NectoPelt;
