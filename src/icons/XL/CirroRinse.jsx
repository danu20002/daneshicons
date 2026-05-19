import React from 'react';

export const iconData = {
  "id": "CirroRinse",
  "name": "CirroRinse",
  "category": "XL",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.80"
      }
    ]
  ]
};

export const CirroRinse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.48" />
      <circle cx="6.00" cy="10.00" r="0.79" />
      <circle cx="6.00" cy="14.00" r="0.85" />
      <circle cx="6.00" cy="18.00" r="0.77" />
      <circle cx="10.00" cy="6.00" r="1.00" />
      <circle cx="10.00" cy="10.00" r="0.60" />
      <circle cx="10.00" cy="14.00" r="0.58" />
      <circle cx="10.00" cy="18.00" r="0.92" />
      <circle cx="14.00" cy="6.00" r="0.54" />
      <circle cx="14.00" cy="10.00" r="0.76" />
      <circle cx="14.00" cy="14.00" r="0.39" />
      <circle cx="14.00" cy="18.00" r="0.87" />
      <circle cx="18.00" cy="6.00" r="0.38" />
      <circle cx="18.00" cy="10.00" r="0.82" />
      <circle cx="18.00" cy="14.00" r="0.81" />
      <circle cx="18.00" cy="18.00" r="0.80" />
      {children}
    </svg>
  );
});

export default CirroRinse;
