import React from 'react';

export const iconData = {
  "id": "VolaticoEquip",
  "name": "VolaticoEquip",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 3.51 L 10.32 2.70 L 6.65 11.67 L 9.88 8.54 L 16.48 12.53"
      }
    ],
    [
      "circle",
      {
        "cx": "9.98",
        "cy": "3.51",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "10.32",
        "cy": "2.70",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "6.65",
        "cy": "11.67",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "9.88",
        "cy": "8.54",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "16.48",
        "cy": "12.53",
        "r": "0.70"
      }
    ]
  ]
};

export const VolaticoEquip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 3.51 L 10.32 2.70 L 6.65 11.67 L 9.88 8.54 L 16.48 12.53" />
      <circle cx="9.98" cy="3.51" r="1.41" />
      <circle cx="10.32" cy="2.70" r="0.67" />
      <circle cx="6.65" cy="11.67" r="1.10" />
      <circle cx="9.88" cy="8.54" r="0.74" />
      <circle cx="16.48" cy="12.53" r="0.70" />
      {children}
    </svg>
  );
});

export default VolaticoEquip;
