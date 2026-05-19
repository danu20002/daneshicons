import React from 'react';

export const iconData = {
  "id": "VolleyRed",
  "name": "VolleyRed",
  "category": "QD",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.49"
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
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.33"
      }
    ]
  ]
};

export const VolleyRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.72" />
      <circle cx="6.00" cy="10.00" r="0.44" />
      <circle cx="6.00" cy="14.00" r="0.86" />
      <circle cx="6.00" cy="18.00" r="0.60" />
      <circle cx="10.00" cy="6.00" r="0.49" />
      <circle cx="10.00" cy="10.00" r="0.97" />
      <circle cx="10.00" cy="14.00" r="1.00" />
      <circle cx="10.00" cy="18.00" r="0.33" />
      <circle cx="14.00" cy="6.00" r="1.02" />
      <circle cx="14.00" cy="10.00" r="0.88" />
      <circle cx="14.00" cy="14.00" r="0.62" />
      <circle cx="14.00" cy="18.00" r="1.08" />
      <circle cx="18.00" cy="6.00" r="0.37" />
      <circle cx="18.00" cy="10.00" r="0.97" />
      <circle cx="18.00" cy="14.00" r="0.39" />
      <circle cx="18.00" cy="18.00" r="0.33" />
      {children}
    </svg>
  );
});

export default VolleyRed;
