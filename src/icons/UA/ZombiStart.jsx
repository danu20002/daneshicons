import React from 'react';

export const iconData = {
  "id": "ZombiStart",
  "name": "ZombiStart",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.26 11.24 L 15.41 6.77 L 18.09 13.71 L 8.88 14.76"
      }
    ],
    [
      "circle",
      {
        "cx": "10.26",
        "cy": "11.24",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "15.41",
        "cy": "6.77",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "18.09",
        "cy": "13.71",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "8.88",
        "cy": "14.76",
        "r": "1.37"
      }
    ]
  ]
};

export const ZombiStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.26 11.24 L 15.41 6.77 L 18.09 13.71 L 8.88 14.76" />
      <circle cx="10.26" cy="11.24" r="1.24" />
      <circle cx="15.41" cy="6.77" r="1.12" />
      <circle cx="18.09" cy="13.71" r="1.32" />
      <circle cx="8.88" cy="14.76" r="1.37" />
      {children}
    </svg>
  );
});

export default ZombiStart;
