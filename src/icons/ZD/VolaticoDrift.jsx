import React from 'react';

export const iconData = {
  "id": "VolaticoDrift",
  "name": "VolaticoDrift",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 20.31 L 16.86 3.50 L 6.92 3.54 L 4.32 18.24 L 10.82 10.85 L 17.50 6.92 L 2.17 12.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "20.31",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "16.86",
        "cy": "3.50",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "6.92",
        "cy": "3.54",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "4.32",
        "cy": "18.24",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "10.82",
        "cy": "10.85",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "17.50",
        "cy": "6.92",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "2.17",
        "cy": "12.33",
        "r": "0.68"
      }
    ]
  ]
};

export const VolaticoDrift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 20.31 L 16.86 3.50 L 6.92 3.54 L 4.32 18.24 L 10.82 10.85 L 17.50 6.92 L 2.17 12.33" />
      <circle cx="18.67" cy="20.31" r="1.18" />
      <circle cx="16.86" cy="3.50" r="0.92" />
      <circle cx="6.92" cy="3.54" r="1.13" />
      <circle cx="4.32" cy="18.24" r="1.17" />
      <circle cx="10.82" cy="10.85" r="0.84" />
      <circle cx="17.50" cy="6.92" r="1.22" />
      <circle cx="2.17" cy="12.33" r="0.68" />
      {children}
    </svg>
  );
});

export default VolaticoDrift;
