import React from 'react';

export const iconData = {
  "id": "UrticeCream",
  "name": "UrticeCream",
  "category": "FX",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.58"
      }
    ]
  ]
};

export const UrticeCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="1.09" />
      <circle cx="6.00" cy="10.00" r="0.72" />
      <circle cx="6.00" cy="14.00" r="1.03" />
      <circle cx="6.00" cy="18.00" r="1.06" />
      <circle cx="10.00" cy="6.00" r="0.75" />
      <circle cx="10.00" cy="10.00" r="1.03" />
      <circle cx="10.00" cy="14.00" r="0.44" />
      <circle cx="10.00" cy="18.00" r="0.82" />
      <circle cx="14.00" cy="6.00" r="0.89" />
      <circle cx="14.00" cy="10.00" r="0.98" />
      <circle cx="14.00" cy="14.00" r="0.41" />
      <circle cx="14.00" cy="18.00" r="0.80" />
      <circle cx="18.00" cy="6.00" r="1.03" />
      <circle cx="18.00" cy="10.00" r="0.54" />
      <circle cx="18.00" cy="14.00" r="1.08" />
      <circle cx="18.00" cy="18.00" r="0.58" />
      {children}
    </svg>
  );
});

export default UrticeCream;
