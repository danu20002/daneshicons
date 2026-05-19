import React from 'react';

export const iconData = {
  "id": "TrulloAxel",
  "name": "TrulloAxel",
  "category": "GQ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.44"
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
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.41"
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
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.99"
      }
    ]
  ]
};

export const TrulloAxel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.92" />
      <circle cx="6.00" cy="10.00" r="0.37" />
      <circle cx="6.00" cy="14.00" r="1.08" />
      <circle cx="6.00" cy="18.00" r="1.08" />
      <circle cx="10.00" cy="6.00" r="0.44" />
      <circle cx="10.00" cy="10.00" r="0.79" />
      <circle cx="10.00" cy="14.00" r="0.91" />
      <circle cx="10.00" cy="18.00" r="1.02" />
      <circle cx="14.00" cy="6.00" r="0.36" />
      <circle cx="14.00" cy="10.00" r="0.94" />
      <circle cx="14.00" cy="14.00" r="0.41" />
      <circle cx="14.00" cy="18.00" r="0.51" />
      <circle cx="18.00" cy="6.00" r="0.46" />
      <circle cx="18.00" cy="10.00" r="0.58" />
      <circle cx="18.00" cy="14.00" r="0.70" />
      <circle cx="18.00" cy="18.00" r="0.99" />
      {children}
    </svg>
  );
});

export default TrulloAxel;
