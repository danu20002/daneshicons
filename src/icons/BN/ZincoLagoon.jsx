import React from 'react';

export const iconData = {
  "id": "ZincoLagoon",
  "name": "ZincoLagoon",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.54"
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
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "1.03"
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
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.49"
      }
    ]
  ]
};

export const ZincoLagoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.54" />
      <circle cx="6.00" cy="10.00" r="0.61" />
      <circle cx="6.00" cy="14.00" r="1.04" />
      <circle cx="6.00" cy="18.00" r="0.55" />
      <circle cx="10.00" cy="6.00" r="0.48" />
      <circle cx="10.00" cy="10.00" r="0.60" />
      <circle cx="10.00" cy="14.00" r="1.03" />
      <circle cx="10.00" cy="18.00" r="0.33" />
      <circle cx="14.00" cy="6.00" r="0.74" />
      <circle cx="14.00" cy="10.00" r="0.50" />
      <circle cx="14.00" cy="14.00" r="0.54" />
      <circle cx="14.00" cy="18.00" r="0.52" />
      <circle cx="18.00" cy="6.00" r="0.98" />
      <circle cx="18.00" cy="10.00" r="0.64" />
      <circle cx="18.00" cy="14.00" r="0.93" />
      <circle cx="18.00" cy="18.00" r="0.49" />
      {children}
    </svg>
  );
});

export default ZincoLagoon;
