import React from 'react';

export const iconData = {
  "id": "VitaleSmoke",
  "name": "VitaleSmoke",
  "category": "RP",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.74"
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
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.74"
      }
    ]
  ]
};

export const VitaleSmoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.53" />
      <circle cx="6.00" cy="10.00" r="0.83" />
      <circle cx="6.00" cy="14.00" r="0.80" />
      <circle cx="6.00" cy="18.00" r="0.79" />
      <circle cx="10.00" cy="6.00" r="0.74" />
      <circle cx="10.00" cy="10.00" r="0.52" />
      <circle cx="10.00" cy="14.00" r="0.31" />
      <circle cx="10.00" cy="18.00" r="0.50" />
      <circle cx="14.00" cy="6.00" r="0.40" />
      <circle cx="14.00" cy="10.00" r="0.85" />
      <circle cx="14.00" cy="14.00" r="0.35" />
      <circle cx="14.00" cy="18.00" r="0.73" />
      <circle cx="18.00" cy="6.00" r="0.79" />
      <circle cx="18.00" cy="10.00" r="0.67" />
      <circle cx="18.00" cy="14.00" r="0.78" />
      <circle cx="18.00" cy="18.00" r="0.74" />
      {children}
    </svg>
  );
});

export default VitaleSmoke;
