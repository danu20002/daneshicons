import React from 'react';

export const iconData = {
  "id": "VolturaCove",
  "name": "VolturaCove",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.74 6.88 L 13.85 4.63"
      }
    ],
    [
      "path",
      {
        "d": "M 11.74 6.88 L 18.04 5.39"
      }
    ],
    [
      "path",
      {
        "d": "M 11.74 6.88 L 6.30 12.17"
      }
    ],
    [
      "path",
      {
        "d": "M 13.85 4.63 L 3.40 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 13.85 4.63 L 6.30 12.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 5.39 L 13.99 13.39"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 5.39 L 6.30 12.17"
      }
    ],
    [
      "path",
      {
        "d": "M 13.99 13.39 L 6.30 12.17"
      }
    ],
    [
      "circle",
      {
        "cx": "11.74",
        "cy": "6.88",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.85",
        "cy": "4.63",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.40",
        "cy": "16.33",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.04",
        "cy": "5.39",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.99",
        "cy": "13.39",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.30",
        "cy": "12.17",
        "r": "1.5"
      }
    ]
  ]
};

export const VolturaCove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.74 6.88 L 13.85 4.63" />
      <path d="M 11.74 6.88 L 18.04 5.39" />
      <path d="M 11.74 6.88 L 6.30 12.17" />
      <path d="M 13.85 4.63 L 3.40 16.33" />
      <path d="M 13.85 4.63 L 6.30 12.17" />
      <path d="M 18.04 5.39 L 13.99 13.39" />
      <path d="M 18.04 5.39 L 6.30 12.17" />
      <path d="M 13.99 13.39 L 6.30 12.17" />
      <circle cx="11.74" cy="6.88" r="1.5" />
      <circle cx="13.85" cy="4.63" r="1.5" />
      <circle cx="3.40" cy="16.33" r="1.5" />
      <circle cx="18.04" cy="5.39" r="1.5" />
      <circle cx="13.99" cy="13.39" r="1.5" />
      <circle cx="6.30" cy="12.17" r="1.5" />
      {children}
    </svg>
  );
});

export default VolturaCove;
