import React from 'react';

export const iconData = {
  "id": "TopoJet",
  "name": "TopoJet",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.88 21.13 L 5.62 20.23 L 15.62 6.93 L 2.24 11.00 L 21.29 3.95"
      }
    ],
    [
      "circle",
      {
        "cx": "20.88",
        "cy": "21.13",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "5.62",
        "cy": "20.23",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "15.62",
        "cy": "6.93",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "2.24",
        "cy": "11.00",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "21.29",
        "cy": "3.95",
        "r": "1.23"
      }
    ]
  ]
};

export const TopoJet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.88 21.13 L 5.62 20.23 L 15.62 6.93 L 2.24 11.00 L 21.29 3.95" />
      <circle cx="20.88" cy="21.13" r="1.11" />
      <circle cx="5.62" cy="20.23" r="1.13" />
      <circle cx="15.62" cy="6.93" r="0.58" />
      <circle cx="2.24" cy="11.00" r="1.17" />
      <circle cx="21.29" cy="3.95" r="1.23" />
      {children}
    </svg>
  );
});

export default TopoJet;
