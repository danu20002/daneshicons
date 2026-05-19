import React from 'react';

export const iconData = {
  "id": "SaphoOxide",
  "name": "SaphoOxide",
  "category": "MM",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.04"
      }
    ]
  ]
};

export const SaphoOxide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.52" />
      <circle cx="6.00" cy="10.00" r="0.56" />
      <circle cx="6.00" cy="14.00" r="0.66" />
      <circle cx="6.00" cy="18.00" r="0.63" />
      <circle cx="10.00" cy="6.00" r="0.30" />
      <circle cx="10.00" cy="10.00" r="0.88" />
      <circle cx="10.00" cy="14.00" r="0.37" />
      <circle cx="10.00" cy="18.00" r="0.34" />
      <circle cx="14.00" cy="6.00" r="0.62" />
      <circle cx="14.00" cy="10.00" r="1.05" />
      <circle cx="14.00" cy="14.00" r="0.43" />
      <circle cx="14.00" cy="18.00" r="1.06" />
      <circle cx="18.00" cy="6.00" r="0.74" />
      <circle cx="18.00" cy="10.00" r="0.31" />
      <circle cx="18.00" cy="14.00" r="0.39" />
      <circle cx="18.00" cy="18.00" r="1.04" />
      {children}
    </svg>
  );
});

export default SaphoOxide;
