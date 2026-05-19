import React from 'react';

export const iconData = {
  "id": "SanguiWilling",
  "name": "SanguiWilling",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.82 18.08 L 17.32 13.03 L 2.94 9.67 L 19.54 17.33 L 18.20 5.08 L 2.26 11.22 L 3.35 21.69 L 3.87 14.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.82",
        "cy": "18.08",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "17.32",
        "cy": "13.03",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "2.94",
        "cy": "9.67",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "19.54",
        "cy": "17.33",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "18.20",
        "cy": "5.08",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "2.26",
        "cy": "11.22",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "3.35",
        "cy": "21.69",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "3.87",
        "cy": "14.37",
        "r": "0.53"
      }
    ]
  ]
};

export const SanguiWilling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.82 18.08 L 17.32 13.03 L 2.94 9.67 L 19.54 17.33 L 18.20 5.08 L 2.26 11.22 L 3.35 21.69 L 3.87 14.37" />
      <circle cx="18.82" cy="18.08" r="0.72" />
      <circle cx="17.32" cy="13.03" r="0.55" />
      <circle cx="2.94" cy="9.67" r="1.29" />
      <circle cx="19.54" cy="17.33" r="1.26" />
      <circle cx="18.20" cy="5.08" r="0.62" />
      <circle cx="2.26" cy="11.22" r="0.58" />
      <circle cx="3.35" cy="21.69" r="0.56" />
      <circle cx="3.87" cy="14.37" r="0.53" />
      {children}
    </svg>
  );
});

export default SanguiWilling;
