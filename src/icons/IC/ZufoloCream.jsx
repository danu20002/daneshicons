import React from 'react';

export const iconData = {
  "id": "ZufoloCream",
  "name": "ZufoloCream",
  "category": "IC",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.46"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "1.03"
      }
    ]
  ]
};

export const ZufoloCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.07" />
      <circle cx="5.60" cy="8.80" r="0.73" />
      <circle cx="5.60" cy="12.00" r="0.46" />
      <circle cx="5.60" cy="15.20" r="1.06" />
      <circle cx="5.60" cy="18.40" r="0.55" />
      <circle cx="8.80" cy="5.60" r="0.93" />
      <circle cx="8.80" cy="8.80" r="0.40" />
      <circle cx="8.80" cy="12.00" r="0.31" />
      <circle cx="8.80" cy="15.20" r="0.44" />
      <circle cx="8.80" cy="18.40" r="0.86" />
      <circle cx="12.00" cy="5.60" r="0.70" />
      <circle cx="12.00" cy="8.80" r="0.55" />
      <circle cx="12.00" cy="12.00" r="1.00" />
      <circle cx="12.00" cy="15.20" r="0.63" />
      <circle cx="12.00" cy="18.40" r="0.56" />
      <circle cx="15.20" cy="5.60" r="0.93" />
      <circle cx="15.20" cy="8.80" r="0.67" />
      <circle cx="15.20" cy="12.00" r="0.37" />
      <circle cx="15.20" cy="15.20" r="0.88" />
      <circle cx="15.20" cy="18.40" r="1.01" />
      <circle cx="18.40" cy="5.60" r="0.98" />
      <circle cx="18.40" cy="8.80" r="0.69" />
      <circle cx="18.40" cy="12.00" r="0.40" />
      <circle cx="18.40" cy="15.20" r="0.33" />
      <circle cx="18.40" cy="18.40" r="1.03" />
      {children}
    </svg>
  );
});

export default ZufoloCream;
