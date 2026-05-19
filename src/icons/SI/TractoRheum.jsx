import React from 'react';

export const iconData = {
  "id": "TractoRheum",
  "name": "TractoRheum",
  "category": "SI",
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
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.66"
      }
    ]
  ]
};

export const TractoRheum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="10.00" r="1.04" />
      <circle cx="6.00" cy="14.00" r="0.87" />
      <circle cx="6.00" cy="18.00" r="0.87" />
      <circle cx="10.00" cy="6.00" r="0.91" />
      <circle cx="10.00" cy="10.00" r="0.31" />
      <circle cx="10.00" cy="14.00" r="0.88" />
      <circle cx="10.00" cy="18.00" r="0.98" />
      <circle cx="14.00" cy="6.00" r="1.01" />
      <circle cx="14.00" cy="10.00" r="0.46" />
      <circle cx="14.00" cy="14.00" r="0.80" />
      <circle cx="14.00" cy="18.00" r="0.36" />
      <circle cx="18.00" cy="6.00" r="0.96" />
      <circle cx="18.00" cy="10.00" r="0.48" />
      <circle cx="18.00" cy="14.00" r="0.58" />
      <circle cx="18.00" cy="18.00" r="0.66" />
      {children}
    </svg>
  );
});

export default TractoRheum;
