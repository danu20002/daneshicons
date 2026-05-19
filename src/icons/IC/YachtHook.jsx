import React from 'react';

export const iconData = {
  "id": "YachtHook",
  "name": "YachtHook",
  "category": "IC",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.09"
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
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.48"
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

export const YachtHook = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.63" />
      <circle cx="6.00" cy="10.00" r="0.56" />
      <circle cx="6.00" cy="14.00" r="1.09" />
      <circle cx="6.00" cy="18.00" r="0.79" />
      <circle cx="10.00" cy="6.00" r="0.31" />
      <circle cx="10.00" cy="10.00" r="0.79" />
      <circle cx="10.00" cy="14.00" r="0.74" />
      <circle cx="10.00" cy="18.00" r="0.78" />
      <circle cx="14.00" cy="6.00" r="0.96" />
      <circle cx="14.00" cy="10.00" r="0.32" />
      <circle cx="14.00" cy="14.00" r="1.07" />
      <circle cx="14.00" cy="18.00" r="0.57" />
      <circle cx="18.00" cy="6.00" r="0.38" />
      <circle cx="18.00" cy="10.00" r="0.55" />
      <circle cx="18.00" cy="14.00" r="0.48" />
      <circle cx="18.00" cy="18.00" r="0.68" />
      {children}
    </svg>
  );
});

export default YachtHook;
