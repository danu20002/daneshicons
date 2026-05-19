import React from 'react';

export const iconData = {
  "id": "TabulaManual",
  "name": "TabulaManual",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.17 21.20 L 14.28 10.33 L 4.84 9.45 L 14.56 19.57 L 9.74 7.51"
      }
    ],
    [
      "circle",
      {
        "cx": "21.17",
        "cy": "21.20",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "14.28",
        "cy": "10.33",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "4.84",
        "cy": "9.45",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "14.56",
        "cy": "19.57",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "9.74",
        "cy": "7.51",
        "r": "0.77"
      }
    ]
  ]
};

export const TabulaManual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.17 21.20 L 14.28 10.33 L 4.84 9.45 L 14.56 19.57 L 9.74 7.51" />
      <circle cx="21.17" cy="21.20" r="1.31" />
      <circle cx="14.28" cy="10.33" r="1.29" />
      <circle cx="4.84" cy="9.45" r="0.53" />
      <circle cx="14.56" cy="19.57" r="1.35" />
      <circle cx="9.74" cy="7.51" r="0.77" />
      {children}
    </svg>
  );
});

export default TabulaManual;
