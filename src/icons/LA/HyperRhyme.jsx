import React from 'react';

export const iconData = {
  "id": "HyperRhyme",
  "name": "HyperRhyme",
  "category": "LA",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.32"
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
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.32"
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

export const HyperRhyme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.41" />
      <circle cx="6.00" cy="10.00" r="0.66" />
      <circle cx="6.00" cy="14.00" r="0.32" />
      <circle cx="6.00" cy="18.00" r="1.06" />
      <circle cx="10.00" cy="6.00" r="0.83" />
      <circle cx="10.00" cy="10.00" r="0.67" />
      <circle cx="10.00" cy="14.00" r="0.69" />
      <circle cx="10.00" cy="18.00" r="0.52" />
      <circle cx="14.00" cy="6.00" r="0.51" />
      <circle cx="14.00" cy="10.00" r="0.70" />
      <circle cx="14.00" cy="14.00" r="0.91" />
      <circle cx="14.00" cy="18.00" r="0.32" />
      <circle cx="18.00" cy="6.00" r="1.00" />
      <circle cx="18.00" cy="10.00" r="0.89" />
      <circle cx="18.00" cy="14.00" r="0.32" />
      <circle cx="18.00" cy="18.00" r="0.74" />
      {children}
    </svg>
  );
});

export default HyperRhyme;
