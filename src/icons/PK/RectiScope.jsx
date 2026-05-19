import React from 'react';

export const iconData = {
  "id": "RectiScope",
  "name": "RectiScope",
  "category": "PK",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.42"
      }
    ]
  ]
};

export const RectiScope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.77" />
      <circle cx="5.60" cy="8.80" r="0.92" />
      <circle cx="5.60" cy="12.00" r="0.89" />
      <circle cx="5.60" cy="15.20" r="0.68" />
      <circle cx="5.60" cy="18.40" r="1.07" />
      <circle cx="8.80" cy="5.60" r="1.08" />
      <circle cx="8.80" cy="8.80" r="0.30" />
      <circle cx="8.80" cy="12.00" r="0.62" />
      <circle cx="8.80" cy="15.20" r="0.31" />
      <circle cx="8.80" cy="18.40" r="0.56" />
      <circle cx="12.00" cy="5.60" r="1.07" />
      <circle cx="12.00" cy="8.80" r="1.03" />
      <circle cx="12.00" cy="12.00" r="0.97" />
      <circle cx="12.00" cy="15.20" r="0.54" />
      <circle cx="12.00" cy="18.40" r="0.84" />
      <circle cx="15.20" cy="5.60" r="0.50" />
      <circle cx="15.20" cy="8.80" r="0.54" />
      <circle cx="15.20" cy="12.00" r="1.08" />
      <circle cx="15.20" cy="15.20" r="0.89" />
      <circle cx="15.20" cy="18.40" r="0.39" />
      <circle cx="18.40" cy="5.60" r="0.85" />
      <circle cx="18.40" cy="8.80" r="0.43" />
      <circle cx="18.40" cy="12.00" r="0.54" />
      <circle cx="18.40" cy="15.20" r="0.80" />
      <circle cx="18.40" cy="18.40" r="0.42" />
      {children}
    </svg>
  );
});

export default RectiScope;
