import React from 'react';

export const iconData = {
  "id": "SpiralElevate",
  "name": "SpiralElevate",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 16.07 L 15.32 15.33 L 11.35 9.22 L 17.92 14.24"
      }
    ],
    [
      "circle",
      {
        "cx": "3.44",
        "cy": "16.07",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "15.32",
        "cy": "15.33",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "11.35",
        "cy": "9.22",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "17.92",
        "cy": "14.24",
        "r": "0.55"
      }
    ]
  ]
};

export const SpiralElevate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 16.07 L 15.32 15.33 L 11.35 9.22 L 17.92 14.24" />
      <circle cx="3.44" cy="16.07" r="1.13" />
      <circle cx="15.32" cy="15.33" r="1.16" />
      <circle cx="11.35" cy="9.22" r="1.28" />
      <circle cx="17.92" cy="14.24" r="0.55" />
      {children}
    </svg>
  );
});

export default SpiralElevate;
