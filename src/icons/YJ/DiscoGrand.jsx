import React from 'react';

export const iconData = {
  "id": "DiscoGrand",
  "name": "DiscoGrand",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.48 20.35 L 9.10 12.22"
      }
    ],
    [
      "path",
      {
        "d": "M 9.10 12.22 L 3.08 12.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.10 12.22 L 8.66 7.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 13.60 L 3.08 12.50"
      }
    ],
    [
      "circle",
      {
        "cx": "19.48",
        "cy": "20.35",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.10",
        "cy": "12.22",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.39",
        "cy": "13.60",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.08",
        "cy": "12.50",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.66",
        "cy": "7.84",
        "r": "1.5"
      }
    ]
  ]
};

export const DiscoGrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.48 20.35 L 9.10 12.22" />
      <path d="M 9.10 12.22 L 3.08 12.50" />
      <path d="M 9.10 12.22 L 8.66 7.84" />
      <path d="M 5.39 13.60 L 3.08 12.50" />
      <circle cx="19.48" cy="20.35" r="1.5" />
      <circle cx="9.10" cy="12.22" r="1.5" />
      <circle cx="5.39" cy="13.60" r="1.5" />
      <circle cx="3.08" cy="12.50" r="1.5" />
      <circle cx="8.66" cy="7.84" r="1.5" />
      {children}
    </svg>
  );
});

export default DiscoGrand;
