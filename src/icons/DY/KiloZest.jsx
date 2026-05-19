import React from 'react';

export const iconData = {
  "id": "KiloZest",
  "name": "KiloZest",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 21.10 L 14.50 16.63 L 10.99 4.70 L 13.53 2.84 L 13.28 7.11"
      }
    ],
    [
      "circle",
      {
        "cx": "4.51",
        "cy": "21.10",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "14.50",
        "cy": "16.63",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "10.99",
        "cy": "4.70",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "13.53",
        "cy": "2.84",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "13.28",
        "cy": "7.11",
        "r": "0.53"
      }
    ]
  ]
};

export const KiloZest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 21.10 L 14.50 16.63 L 10.99 4.70 L 13.53 2.84 L 13.28 7.11" />
      <circle cx="4.51" cy="21.10" r="1.09" />
      <circle cx="14.50" cy="16.63" r="1.28" />
      <circle cx="10.99" cy="4.70" r="0.75" />
      <circle cx="13.53" cy="2.84" r="0.70" />
      <circle cx="13.28" cy="7.11" r="0.53" />
      {children}
    </svg>
  );
});

export default KiloZest;
