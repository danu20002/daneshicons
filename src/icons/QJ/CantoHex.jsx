import React from 'react';

export const iconData = {
  "id": "CantoHex",
  "name": "CantoHex",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.84 10.37 L 21.66 15.49 L 7.31 12.58 L 11.40 14.81"
      }
    ],
    [
      "circle",
      {
        "cx": "19.84",
        "cy": "10.37",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "21.66",
        "cy": "15.49",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "7.31",
        "cy": "12.58",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "11.40",
        "cy": "14.81",
        "r": "0.84"
      }
    ]
  ]
};

export const CantoHex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.84 10.37 L 21.66 15.49 L 7.31 12.58 L 11.40 14.81" />
      <circle cx="19.84" cy="10.37" r="1.50" />
      <circle cx="21.66" cy="15.49" r="0.94" />
      <circle cx="7.31" cy="12.58" r="0.83" />
      <circle cx="11.40" cy="14.81" r="0.84" />
      {children}
    </svg>
  );
});

export default CantoHex;
