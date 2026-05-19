import React from 'react';

export const iconData = {
  "id": "SacroMilk",
  "name": "SacroMilk",
  "category": "NF",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.44"
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
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.83"
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
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.42"
      }
    ]
  ]
};

export const SacroMilk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="1.10" />
      <circle cx="6.00" cy="10.00" r="0.44" />
      <circle cx="6.00" cy="14.00" r="0.85" />
      <circle cx="6.00" cy="18.00" r="0.36" />
      <circle cx="10.00" cy="6.00" r="0.79" />
      <circle cx="10.00" cy="10.00" r="0.83" />
      <circle cx="10.00" cy="14.00" r="0.44" />
      <circle cx="10.00" cy="18.00" r="0.55" />
      <circle cx="14.00" cy="6.00" r="1.00" />
      <circle cx="14.00" cy="10.00" r="0.50" />
      <circle cx="14.00" cy="14.00" r="0.53" />
      <circle cx="14.00" cy="18.00" r="0.56" />
      <circle cx="18.00" cy="6.00" r="0.41" />
      <circle cx="18.00" cy="10.00" r="0.84" />
      <circle cx="18.00" cy="14.00" r="0.43" />
      <circle cx="18.00" cy="18.00" r="0.42" />
      {children}
    </svg>
  );
});

export default SacroMilk;
