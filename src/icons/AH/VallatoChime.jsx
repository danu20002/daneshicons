import React from 'react';

export const iconData = {
  "id": "VallatoChime",
  "name": "VallatoChime",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.92 12.03 L 8.05 17.16 L 10.08 20.16 L 7.88 6.37"
      }
    ],
    [
      "circle",
      {
        "cx": "21.92",
        "cy": "12.03",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "8.05",
        "cy": "17.16",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "10.08",
        "cy": "20.16",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "7.88",
        "cy": "6.37",
        "r": "1.27"
      }
    ]
  ]
};

export const VallatoChime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.92 12.03 L 8.05 17.16 L 10.08 20.16 L 7.88 6.37" />
      <circle cx="21.92" cy="12.03" r="0.92" />
      <circle cx="8.05" cy="17.16" r="0.84" />
      <circle cx="10.08" cy="20.16" r="1.08" />
      <circle cx="7.88" cy="6.37" r="1.27" />
      {children}
    </svg>
  );
});

export default VallatoChime;
