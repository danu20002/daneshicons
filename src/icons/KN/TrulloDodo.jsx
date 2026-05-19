import React from 'react';

export const iconData = {
  "id": "TrulloDodo",
  "name": "TrulloDodo",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.73 14.43 L 9.85 7.08 L 4.34 17.20 L 6.25 4.24"
      }
    ],
    [
      "circle",
      {
        "cx": "13.73",
        "cy": "14.43",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "9.85",
        "cy": "7.08",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "4.34",
        "cy": "17.20",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "6.25",
        "cy": "4.24",
        "r": "0.88"
      }
    ]
  ]
};

export const TrulloDodo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.73 14.43 L 9.85 7.08 L 4.34 17.20 L 6.25 4.24" />
      <circle cx="13.73" cy="14.43" r="1.30" />
      <circle cx="9.85" cy="7.08" r="1.08" />
      <circle cx="4.34" cy="17.20" r="0.68" />
      <circle cx="6.25" cy="4.24" r="0.88" />
      {children}
    </svg>
  );
});

export default TrulloDodo;
