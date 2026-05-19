import React from 'react';

export const iconData = {
  "id": "TranquilloDominion",
  "name": "TranquilloDominion",
  "category": "AU",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.93"
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
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.68"
      }
    ]
  ]
};

export const TranquilloDominion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.94" />
      <circle cx="6.00" cy="10.00" r="0.88" />
      <circle cx="6.00" cy="14.00" r="0.73" />
      <circle cx="6.00" cy="18.00" r="0.71" />
      <circle cx="10.00" cy="6.00" r="0.76" />
      <circle cx="10.00" cy="10.00" r="1.01" />
      <circle cx="10.00" cy="14.00" r="0.47" />
      <circle cx="10.00" cy="18.00" r="0.56" />
      <circle cx="14.00" cy="6.00" r="0.74" />
      <circle cx="14.00" cy="10.00" r="0.93" />
      <circle cx="14.00" cy="14.00" r="0.49" />
      <circle cx="14.00" cy="18.00" r="0.38" />
      <circle cx="18.00" cy="6.00" r="0.57" />
      <circle cx="18.00" cy="10.00" r="0.44" />
      <circle cx="18.00" cy="14.00" r="0.91" />
      <circle cx="18.00" cy="18.00" r="0.68" />
      {children}
    </svg>
  );
});

export default TranquilloDominion;
