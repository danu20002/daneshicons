import React from 'react';

export const iconData = {
  "id": "ZampognaDine",
  "name": "ZampognaDine",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 21.41 L 17.01 10.19 L 16.77 17.35 L 2.90 14.82 L 10.95 21.48 L 3.38 2.70 L 9.79 10.54 L 12.21 19.59"
      }
    ],
    [
      "circle",
      {
        "cx": "3.40",
        "cy": "21.41",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "17.01",
        "cy": "10.19",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "16.77",
        "cy": "17.35",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "2.90",
        "cy": "14.82",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.95",
        "cy": "21.48",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "3.38",
        "cy": "2.70",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "9.79",
        "cy": "10.54",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "12.21",
        "cy": "19.59",
        "r": "0.56"
      }
    ]
  ]
};

export const ZampognaDine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 21.41 L 17.01 10.19 L 16.77 17.35 L 2.90 14.82 L 10.95 21.48 L 3.38 2.70 L 9.79 10.54 L 12.21 19.59" />
      <circle cx="3.40" cy="21.41" r="0.52" />
      <circle cx="17.01" cy="10.19" r="1.02" />
      <circle cx="16.77" cy="17.35" r="1.42" />
      <circle cx="2.90" cy="14.82" r="1.48" />
      <circle cx="10.95" cy="21.48" r="1.16" />
      <circle cx="3.38" cy="2.70" r="0.75" />
      <circle cx="9.79" cy="10.54" r="0.85" />
      <circle cx="12.21" cy="19.59" r="0.56" />
      {children}
    </svg>
  );
});

export default ZampognaDine;
