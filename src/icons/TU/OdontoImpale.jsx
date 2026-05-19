import React from 'react';

export const iconData = {
  "id": "OdontoImpale",
  "name": "OdontoImpale",
  "category": "TU",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.78"
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
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.98"
      }
    ]
  ]
};

export const OdontoImpale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.51" />
      <circle cx="6.00" cy="10.00" r="0.78" />
      <circle cx="6.00" cy="14.00" r="0.88" />
      <circle cx="6.00" cy="18.00" r="0.32" />
      <circle cx="10.00" cy="6.00" r="0.66" />
      <circle cx="10.00" cy="10.00" r="0.95" />
      <circle cx="10.00" cy="14.00" r="0.71" />
      <circle cx="10.00" cy="18.00" r="0.90" />
      <circle cx="14.00" cy="6.00" r="1.07" />
      <circle cx="14.00" cy="10.00" r="0.69" />
      <circle cx="14.00" cy="14.00" r="0.49" />
      <circle cx="14.00" cy="18.00" r="0.97" />
      <circle cx="18.00" cy="6.00" r="0.34" />
      <circle cx="18.00" cy="10.00" r="0.74" />
      <circle cx="18.00" cy="14.00" r="0.97" />
      <circle cx="18.00" cy="18.00" r="0.98" />
      {children}
    </svg>
  );
});

export default OdontoImpale;
