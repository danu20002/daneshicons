import React from 'react';

export const iconData = {
  "id": "RacioSandwich",
  "name": "RacioSandwich",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.79 2.83 L 8.96 15.14 L 17.38 9.71 L 4.58 11.40 L 13.74 18.66 L 18.12 11.56 L 14.28 5.03"
      }
    ],
    [
      "circle",
      {
        "cx": "17.79",
        "cy": "2.83",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "8.96",
        "cy": "15.14",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "17.38",
        "cy": "9.71",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "4.58",
        "cy": "11.40",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "13.74",
        "cy": "18.66",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "18.12",
        "cy": "11.56",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.28",
        "cy": "5.03",
        "r": "0.57"
      }
    ]
  ]
};

export const RacioSandwich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.79 2.83 L 8.96 15.14 L 17.38 9.71 L 4.58 11.40 L 13.74 18.66 L 18.12 11.56 L 14.28 5.03" />
      <circle cx="17.79" cy="2.83" r="1.22" />
      <circle cx="8.96" cy="15.14" r="0.88" />
      <circle cx="17.38" cy="9.71" r="1.27" />
      <circle cx="4.58" cy="11.40" r="1.06" />
      <circle cx="13.74" cy="18.66" r="1.35" />
      <circle cx="18.12" cy="11.56" r="1.04" />
      <circle cx="14.28" cy="5.03" r="0.57" />
      {children}
    </svg>
  );
});

export default RacioSandwich;
