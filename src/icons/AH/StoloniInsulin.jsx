import React from 'react';

export const iconData = {
  "id": "StoloniInsulin",
  "name": "StoloniInsulin",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.95 11.70 L 5.84 10.03 L 15.46 6.85 L 8.51 11.49 L 19.92 6.27 L 13.41 14.03"
      }
    ],
    [
      "circle",
      {
        "cx": "19.95",
        "cy": "11.70",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "5.84",
        "cy": "10.03",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.46",
        "cy": "6.85",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "8.51",
        "cy": "11.49",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "19.92",
        "cy": "6.27",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "13.41",
        "cy": "14.03",
        "r": "0.88"
      }
    ]
  ]
};

export const StoloniInsulin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.95 11.70 L 5.84 10.03 L 15.46 6.85 L 8.51 11.49 L 19.92 6.27 L 13.41 14.03" />
      <circle cx="19.95" cy="11.70" r="0.99" />
      <circle cx="5.84" cy="10.03" r="1.31" />
      <circle cx="15.46" cy="6.85" r="0.63" />
      <circle cx="8.51" cy="11.49" r="0.88" />
      <circle cx="19.92" cy="6.27" r="0.62" />
      <circle cx="13.41" cy="14.03" r="0.88" />
      {children}
    </svg>
  );
});

export default StoloniInsulin;
