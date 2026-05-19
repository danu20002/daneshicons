import React from 'react';

export const iconData = {
  "id": "ZambelloInstant",
  "name": "ZambelloInstant",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.31 17.20 L 17.84 2.58 L 11.82 14.89 L 8.35 13.04"
      }
    ],
    [
      "circle",
      {
        "cx": "14.31",
        "cy": "17.20",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "17.84",
        "cy": "2.58",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "11.82",
        "cy": "14.89",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "8.35",
        "cy": "13.04",
        "r": "0.74"
      }
    ]
  ]
};

export const ZambelloInstant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.31 17.20 L 17.84 2.58 L 11.82 14.89 L 8.35 13.04" />
      <circle cx="14.31" cy="17.20" r="1.15" />
      <circle cx="17.84" cy="2.58" r="0.68" />
      <circle cx="11.82" cy="14.89" r="0.64" />
      <circle cx="8.35" cy="13.04" r="0.74" />
      {children}
    </svg>
  );
});

export default ZambelloInstant;
