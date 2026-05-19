import React from 'react';

export const iconData = {
  "id": "MagniFull",
  "name": "MagniFull",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.14 3.82 L 20.26 7.68 L 21.01 13.24 L 6.05 10.92 L 4.60 8.59 L 10.30 7.22"
      }
    ],
    [
      "circle",
      {
        "cx": "12.14",
        "cy": "3.82",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "20.26",
        "cy": "7.68",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "21.01",
        "cy": "13.24",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "6.05",
        "cy": "10.92",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "4.60",
        "cy": "8.59",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "10.30",
        "cy": "7.22",
        "r": "1.29"
      }
    ]
  ]
};

export const MagniFull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.14 3.82 L 20.26 7.68 L 21.01 13.24 L 6.05 10.92 L 4.60 8.59 L 10.30 7.22" />
      <circle cx="12.14" cy="3.82" r="1.45" />
      <circle cx="20.26" cy="7.68" r="0.90" />
      <circle cx="21.01" cy="13.24" r="0.84" />
      <circle cx="6.05" cy="10.92" r="0.59" />
      <circle cx="4.60" cy="8.59" r="0.92" />
      <circle cx="10.30" cy="7.22" r="1.29" />
      {children}
    </svg>
  );
});

export default MagniFull;
