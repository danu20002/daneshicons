import React from 'react';

export const iconData = {
  "id": "SpiriIndustry",
  "name": "SpiriIndustry",
  "category": "HJ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.45"
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
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.62"
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
        "r": "1.04"
      }
    ]
  ]
};

export const SpiriIndustry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.99" />
      <circle cx="6.00" cy="10.00" r="1.03" />
      <circle cx="6.00" cy="14.00" r="0.74" />
      <circle cx="6.00" cy="18.00" r="1.00" />
      <circle cx="10.00" cy="6.00" r="0.77" />
      <circle cx="10.00" cy="10.00" r="0.45" />
      <circle cx="10.00" cy="14.00" r="1.00" />
      <circle cx="10.00" cy="18.00" r="0.68" />
      <circle cx="14.00" cy="6.00" r="0.94" />
      <circle cx="14.00" cy="10.00" r="0.97" />
      <circle cx="14.00" cy="14.00" r="1.06" />
      <circle cx="14.00" cy="18.00" r="1.00" />
      <circle cx="18.00" cy="6.00" r="0.80" />
      <circle cx="18.00" cy="10.00" r="0.62" />
      <circle cx="18.00" cy="14.00" r="0.96" />
      <circle cx="18.00" cy="18.00" r="1.04" />
      {children}
    </svg>
  );
});

export default SpiriIndustry;
