import React from 'react';

export const iconData = {
  "id": "ValvolaWhirl",
  "name": "ValvolaWhirl",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.85 6.28 L 5.93 18.71 L 13.88 10.00 L 21.37 3.11 L 4.19 20.75 L 4.88 13.40 L 17.65 5.24"
      }
    ],
    [
      "circle",
      {
        "cx": "14.85",
        "cy": "6.28",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "5.93",
        "cy": "18.71",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "13.88",
        "cy": "10.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "21.37",
        "cy": "3.11",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "4.19",
        "cy": "20.75",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "4.88",
        "cy": "13.40",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "17.65",
        "cy": "5.24",
        "r": "0.84"
      }
    ]
  ]
};

export const ValvolaWhirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.85 6.28 L 5.93 18.71 L 13.88 10.00 L 21.37 3.11 L 4.19 20.75 L 4.88 13.40 L 17.65 5.24" />
      <circle cx="14.85" cy="6.28" r="1.21" />
      <circle cx="5.93" cy="18.71" r="0.84" />
      <circle cx="13.88" cy="10.00" r="1.08" />
      <circle cx="21.37" cy="3.11" r="0.74" />
      <circle cx="4.19" cy="20.75" r="1.09" />
      <circle cx="4.88" cy="13.40" r="0.69" />
      <circle cx="17.65" cy="5.24" r="0.84" />
      {children}
    </svg>
  );
});

export default ValvolaWhirl;
