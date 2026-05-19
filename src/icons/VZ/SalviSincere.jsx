import React from 'react';

export const iconData = {
  "id": "SalviSincere",
  "name": "SalviSincere",
  "category": "VZ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "1.09"
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
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.09"
      }
    ]
  ]
};

export const SalviSincere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.30" />
      <circle cx="6.00" cy="10.00" r="0.58" />
      <circle cx="6.00" cy="14.00" r="0.34" />
      <circle cx="6.00" cy="18.00" r="0.36" />
      <circle cx="10.00" cy="6.00" r="1.09" />
      <circle cx="10.00" cy="10.00" r="0.97" />
      <circle cx="10.00" cy="14.00" r="0.31" />
      <circle cx="10.00" cy="18.00" r="0.92" />
      <circle cx="14.00" cy="6.00" r="0.64" />
      <circle cx="14.00" cy="10.00" r="0.86" />
      <circle cx="14.00" cy="14.00" r="0.97" />
      <circle cx="14.00" cy="18.00" r="0.62" />
      <circle cx="18.00" cy="6.00" r="0.77" />
      <circle cx="18.00" cy="10.00" r="1.03" />
      <circle cx="18.00" cy="14.00" r="0.92" />
      <circle cx="18.00" cy="18.00" r="1.09" />
      {children}
    </svg>
  );
});

export default SalviSincere;
