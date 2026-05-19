import React from 'react';

export const iconData = {
  "id": "SkopoRattle",
  "name": "SkopoRattle",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.24 21.63 L 9.50 8.44 L 6.88 4.67 L 9.35 12.09 L 21.92 19.47 L 12.58 6.07"
      }
    ],
    [
      "circle",
      {
        "cx": "12.24",
        "cy": "21.63",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "9.50",
        "cy": "8.44",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "6.88",
        "cy": "4.67",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "9.35",
        "cy": "12.09",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "21.92",
        "cy": "19.47",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "12.58",
        "cy": "6.07",
        "r": "1.19"
      }
    ]
  ]
};

export const SkopoRattle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.24 21.63 L 9.50 8.44 L 6.88 4.67 L 9.35 12.09 L 21.92 19.47 L 12.58 6.07" />
      <circle cx="12.24" cy="21.63" r="0.95" />
      <circle cx="9.50" cy="8.44" r="0.57" />
      <circle cx="6.88" cy="4.67" r="0.81" />
      <circle cx="9.35" cy="12.09" r="1.11" />
      <circle cx="21.92" cy="19.47" r="1.37" />
      <circle cx="12.58" cy="6.07" r="1.19" />
      {children}
    </svg>
  );
});

export default SkopoRattle;
