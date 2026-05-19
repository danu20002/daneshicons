import React from 'react';

export const iconData = {
  "id": "PicoFight",
  "name": "PicoFight",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.93 15.56 L 21.36 2.46 L 16.36 4.27 L 20.36 13.46"
      }
    ],
    [
      "circle",
      {
        "cx": "17.93",
        "cy": "15.56",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "21.36",
        "cy": "2.46",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "16.36",
        "cy": "4.27",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "20.36",
        "cy": "13.46",
        "r": "1.12"
      }
    ]
  ]
};

export const PicoFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.93 15.56 L 21.36 2.46 L 16.36 4.27 L 20.36 13.46" />
      <circle cx="17.93" cy="15.56" r="1.45" />
      <circle cx="21.36" cy="2.46" r="1.39" />
      <circle cx="16.36" cy="4.27" r="0.95" />
      <circle cx="20.36" cy="13.46" r="1.12" />
      {children}
    </svg>
  );
});

export default PicoFight;
