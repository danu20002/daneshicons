import React from 'react';

export const iconData = {
  "id": "InteroCauldron",
  "name": "InteroCauldron",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.80 3.99 L 9.51 17.25 L 9.30 4.78 L 18.69 8.94"
      }
    ],
    [
      "circle",
      {
        "cx": "12.80",
        "cy": "3.99",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "17.25",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "9.30",
        "cy": "4.78",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "18.69",
        "cy": "8.94",
        "r": "0.74"
      }
    ]
  ]
};

export const InteroCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.80 3.99 L 9.51 17.25 L 9.30 4.78 L 18.69 8.94" />
      <circle cx="12.80" cy="3.99" r="1.23" />
      <circle cx="9.51" cy="17.25" r="1.00" />
      <circle cx="9.30" cy="4.78" r="0.65" />
      <circle cx="18.69" cy="8.94" r="0.74" />
      {children}
    </svg>
  );
});

export default InteroCauldron;
