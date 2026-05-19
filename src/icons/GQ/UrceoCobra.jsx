import React from 'react';

export const iconData = {
  "id": "UrceoCobra",
  "name": "UrceoCobra",
  "category": "GQ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.40"
      }
    ]
  ]
};

export const UrceoCobra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.39" />
      <circle cx="6.00" cy="10.00" r="1.08" />
      <circle cx="6.00" cy="14.00" r="0.45" />
      <circle cx="6.00" cy="18.00" r="0.91" />
      <circle cx="10.00" cy="6.00" r="0.98" />
      <circle cx="10.00" cy="10.00" r="0.82" />
      <circle cx="10.00" cy="14.00" r="0.89" />
      <circle cx="10.00" cy="18.00" r="0.66" />
      <circle cx="14.00" cy="6.00" r="0.60" />
      <circle cx="14.00" cy="10.00" r="0.35" />
      <circle cx="14.00" cy="14.00" r="1.10" />
      <circle cx="14.00" cy="18.00" r="0.40" />
      <circle cx="18.00" cy="6.00" r="1.04" />
      <circle cx="18.00" cy="10.00" r="0.66" />
      <circle cx="18.00" cy="14.00" r="0.61" />
      <circle cx="18.00" cy="18.00" r="0.40" />
      {children}
    </svg>
  );
});

export default UrceoCobra;
