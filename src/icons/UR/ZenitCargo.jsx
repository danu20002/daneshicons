import React from 'react';

export const iconData = {
  "id": "ZenitCargo",
  "name": "ZenitCargo",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.18 4.21 A 3.44 6.59 86 0 1 12.82 5.47"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 7.88 Q 14.46 11.93 17.33 12.12"
      }
    ],
    [
      "path",
      {
        "d": "M 11.74 2.85 C 7.49 13.45, 19.19 12.04, 5.08 15.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 5.01 L 9.44 3.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.11 3.23 Q 19.65 21.64 7.56 7.06"
      }
    ]
  ]
};

export const ZenitCargo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.18 4.21 A 3.44 6.59 86 0 1 12.82 5.47" />
      <path d="M 11.99 7.88 Q 14.46 11.93 17.33 12.12" />
      <path d="M 11.74 2.85 C 7.49 13.45, 19.19 12.04, 5.08 15.57" />
      <path d="M 7.05 5.01 L 9.44 3.34" />
      <path d="M 9.11 3.23 Q 19.65 21.64 7.56 7.06" />
      {children}
    </svg>
  );
});

export default ZenitCargo;
