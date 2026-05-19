import React from 'react';

export const iconData = {
  "id": "HaloSmash",
  "name": "HaloSmash",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.34 15.32 L 21.15 5.90 L 20.70 18.00 L 9.85 20.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.34",
        "cy": "15.32",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "5.90",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "20.70",
        "cy": "18.00",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "9.85",
        "cy": "20.10",
        "r": "1.03"
      }
    ]
  ]
};

export const HaloSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.34 15.32 L 21.15 5.90 L 20.70 18.00 L 9.85 20.10" />
      <circle cx="14.34" cy="15.32" r="0.75" />
      <circle cx="21.15" cy="5.90" r="0.65" />
      <circle cx="20.70" cy="18.00" r="1.33" />
      <circle cx="9.85" cy="20.10" r="1.03" />
      {children}
    </svg>
  );
});

export default HaloSmash;
