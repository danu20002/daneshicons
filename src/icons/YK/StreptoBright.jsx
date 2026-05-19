import React from 'react';

export const iconData = {
  "id": "StreptoBright",
  "name": "StreptoBright",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.55 3.80 L 13.08 4.28 L 12.88 12.29 L 8.83 14.10 L 3.65 5.73"
      }
    ],
    [
      "circle",
      {
        "cx": "15.55",
        "cy": "3.80",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "13.08",
        "cy": "4.28",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "12.88",
        "cy": "12.29",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "8.83",
        "cy": "14.10",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "3.65",
        "cy": "5.73",
        "r": "1.37"
      }
    ]
  ]
};

export const StreptoBright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.55 3.80 L 13.08 4.28 L 12.88 12.29 L 8.83 14.10 L 3.65 5.73" />
      <circle cx="15.55" cy="3.80" r="0.70" />
      <circle cx="13.08" cy="4.28" r="1.44" />
      <circle cx="12.88" cy="12.29" r="1.42" />
      <circle cx="8.83" cy="14.10" r="0.77" />
      <circle cx="3.65" cy="5.73" r="1.37" />
      {children}
    </svg>
  );
});

export default StreptoBright;
