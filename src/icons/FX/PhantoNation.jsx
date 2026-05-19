import React from 'react';

export const iconData = {
  "id": "PhantoNation",
  "name": "PhantoNation",
  "category": "FX",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.38"
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
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.61"
      }
    ]
  ]
};

export const PhantoNation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.74" />
      <circle cx="6.00" cy="10.00" r="0.53" />
      <circle cx="6.00" cy="14.00" r="0.63" />
      <circle cx="6.00" cy="18.00" r="0.30" />
      <circle cx="10.00" cy="6.00" r="0.80" />
      <circle cx="10.00" cy="10.00" r="0.97" />
      <circle cx="10.00" cy="14.00" r="0.33" />
      <circle cx="10.00" cy="18.00" r="1.01" />
      <circle cx="14.00" cy="6.00" r="0.34" />
      <circle cx="14.00" cy="10.00" r="0.38" />
      <circle cx="14.00" cy="14.00" r="0.91" />
      <circle cx="14.00" cy="18.00" r="0.46" />
      <circle cx="18.00" cy="6.00" r="0.69" />
      <circle cx="18.00" cy="10.00" r="0.73" />
      <circle cx="18.00" cy="14.00" r="0.49" />
      <circle cx="18.00" cy="18.00" r="0.61" />
      {children}
    </svg>
  );
});

export default PhantoNation;
