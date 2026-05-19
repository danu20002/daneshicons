import React from 'react';

export const iconData = {
  "id": "TrimeroPaddle",
  "name": "TrimeroPaddle",
  "category": "AB",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "1.07"
      }
    ]
  ]
};

export const TrimeroPaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.03" />
      <circle cx="5.60" cy="8.80" r="0.74" />
      <circle cx="5.60" cy="12.00" r="1.00" />
      <circle cx="5.60" cy="15.20" r="1.08" />
      <circle cx="5.60" cy="18.40" r="0.53" />
      <circle cx="8.80" cy="5.60" r="0.61" />
      <circle cx="8.80" cy="8.80" r="0.32" />
      <circle cx="8.80" cy="12.00" r="0.64" />
      <circle cx="8.80" cy="15.20" r="0.94" />
      <circle cx="8.80" cy="18.40" r="0.39" />
      <circle cx="12.00" cy="5.60" r="1.06" />
      <circle cx="12.00" cy="8.80" r="1.01" />
      <circle cx="12.00" cy="12.00" r="0.70" />
      <circle cx="12.00" cy="15.20" r="0.84" />
      <circle cx="12.00" cy="18.40" r="0.63" />
      <circle cx="15.20" cy="5.60" r="0.80" />
      <circle cx="15.20" cy="8.80" r="0.61" />
      <circle cx="15.20" cy="12.00" r="0.92" />
      <circle cx="15.20" cy="15.20" r="1.10" />
      <circle cx="15.20" cy="18.40" r="1.02" />
      <circle cx="18.40" cy="5.60" r="0.89" />
      <circle cx="18.40" cy="8.80" r="0.86" />
      <circle cx="18.40" cy="12.00" r="0.63" />
      <circle cx="18.40" cy="15.20" r="0.63" />
      <circle cx="18.40" cy="18.40" r="1.07" />
      {children}
    </svg>
  );
});

export default TrimeroPaddle;
