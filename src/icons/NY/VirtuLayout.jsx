import React from 'react';

export const iconData = {
  "id": "VirtuLayout",
  "name": "VirtuLayout",
  "category": "NY",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.45"
      }
    ]
  ]
};

export const VirtuLayout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.68" />
      <circle cx="6.00" cy="10.00" r="0.59" />
      <circle cx="6.00" cy="14.00" r="0.84" />
      <circle cx="6.00" cy="18.00" r="0.47" />
      <circle cx="10.00" cy="6.00" r="0.40" />
      <circle cx="10.00" cy="10.00" r="0.52" />
      <circle cx="10.00" cy="14.00" r="0.66" />
      <circle cx="10.00" cy="18.00" r="0.85" />
      <circle cx="14.00" cy="6.00" r="0.76" />
      <circle cx="14.00" cy="10.00" r="0.47" />
      <circle cx="14.00" cy="14.00" r="1.03" />
      <circle cx="14.00" cy="18.00" r="1.05" />
      <circle cx="18.00" cy="6.00" r="0.43" />
      <circle cx="18.00" cy="10.00" r="0.78" />
      <circle cx="18.00" cy="14.00" r="0.80" />
      <circle cx="18.00" cy="18.00" r="0.45" />
      {children}
    </svg>
  );
});

export default VirtuLayout;
