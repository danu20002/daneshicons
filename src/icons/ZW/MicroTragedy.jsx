import React from 'react';

export const iconData = {
  "id": "MicroTragedy",
  "name": "MicroTragedy",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.99 7.99 L 4.16 6.24 L 10.52 2.37 L 3.20 21.16 L 7.84 13.85 L 13.46 19.86 L 19.50 11.80 L 4.15 4.67"
      }
    ],
    [
      "circle",
      {
        "cx": "17.99",
        "cy": "7.99",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "4.16",
        "cy": "6.24",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.52",
        "cy": "2.37",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "3.20",
        "cy": "21.16",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "7.84",
        "cy": "13.85",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "13.46",
        "cy": "19.86",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.50",
        "cy": "11.80",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "4.15",
        "cy": "4.67",
        "r": "1.31"
      }
    ]
  ]
};

export const MicroTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.99 7.99 L 4.16 6.24 L 10.52 2.37 L 3.20 21.16 L 7.84 13.85 L 13.46 19.86 L 19.50 11.80 L 4.15 4.67" />
      <circle cx="17.99" cy="7.99" r="0.94" />
      <circle cx="4.16" cy="6.24" r="0.67" />
      <circle cx="10.52" cy="2.37" r="1.37" />
      <circle cx="3.20" cy="21.16" r="1.21" />
      <circle cx="7.84" cy="13.85" r="1.43" />
      <circle cx="13.46" cy="19.86" r="1.30" />
      <circle cx="19.50" cy="11.80" r="1.50" />
      <circle cx="4.15" cy="4.67" r="1.31" />
      {children}
    </svg>
  );
});

export default MicroTragedy;
