import React from 'react';

export const iconData = {
  "id": "TemperaTalon",
  "name": "TemperaTalon",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 6.74 L 12.23 12.23 L 8.25 4.08 L 9.87 19.21"
      }
    ],
    [
      "circle",
      {
        "cx": "10.54",
        "cy": "6.74",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "12.23",
        "cy": "12.23",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "8.25",
        "cy": "4.08",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "9.87",
        "cy": "19.21",
        "r": "1.07"
      }
    ]
  ]
};

export const TemperaTalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 6.74 L 12.23 12.23 L 8.25 4.08 L 9.87 19.21" />
      <circle cx="10.54" cy="6.74" r="0.86" />
      <circle cx="12.23" cy="12.23" r="1.19" />
      <circle cx="8.25" cy="4.08" r="1.06" />
      <circle cx="9.87" cy="19.21" r="1.07" />
      {children}
    </svg>
  );
});

export default TemperaTalon;
