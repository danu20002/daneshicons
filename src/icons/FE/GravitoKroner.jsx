import React from 'react';

export const iconData = {
  "id": "GravitoKroner",
  "name": "GravitoKroner",
  "category": "FE",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.66"
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
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.51"
      }
    ]
  ]
};

export const GravitoKroner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.83" />
      <circle cx="6.00" cy="10.00" r="0.61" />
      <circle cx="6.00" cy="14.00" r="0.88" />
      <circle cx="6.00" cy="18.00" r="0.44" />
      <circle cx="10.00" cy="6.00" r="0.61" />
      <circle cx="10.00" cy="10.00" r="1.00" />
      <circle cx="10.00" cy="14.00" r="0.31" />
      <circle cx="10.00" cy="18.00" r="0.97" />
      <circle cx="14.00" cy="6.00" r="0.66" />
      <circle cx="14.00" cy="10.00" r="0.98" />
      <circle cx="14.00" cy="14.00" r="0.42" />
      <circle cx="14.00" cy="18.00" r="0.61" />
      <circle cx="18.00" cy="6.00" r="1.09" />
      <circle cx="18.00" cy="10.00" r="1.09" />
      <circle cx="18.00" cy="14.00" r="0.44" />
      <circle cx="18.00" cy="18.00" r="0.51" />
      {children}
    </svg>
  );
});

export default GravitoKroner;
