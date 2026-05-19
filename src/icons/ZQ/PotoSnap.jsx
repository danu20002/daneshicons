import React from 'react';

export const iconData = {
  "id": "PotoSnap",
  "name": "PotoSnap",
  "category": "ZQ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.77"
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
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.90"
      }
    ]
  ]
};

export const PotoSnap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.77" />
      <circle cx="6.00" cy="10.00" r="0.61" />
      <circle cx="6.00" cy="14.00" r="0.39" />
      <circle cx="6.00" cy="18.00" r="0.74" />
      <circle cx="10.00" cy="6.00" r="0.89" />
      <circle cx="10.00" cy="10.00" r="1.04" />
      <circle cx="10.00" cy="14.00" r="0.45" />
      <circle cx="10.00" cy="18.00" r="0.76" />
      <circle cx="14.00" cy="6.00" r="0.78" />
      <circle cx="14.00" cy="10.00" r="0.49" />
      <circle cx="14.00" cy="14.00" r="0.72" />
      <circle cx="14.00" cy="18.00" r="0.51" />
      <circle cx="18.00" cy="6.00" r="0.73" />
      <circle cx="18.00" cy="10.00" r="1.01" />
      <circle cx="18.00" cy="14.00" r="0.96" />
      <circle cx="18.00" cy="18.00" r="0.90" />
      {children}
    </svg>
  );
});

export default PotoSnap;
