import React from 'react';

export const iconData = {
  "id": "ScandiLeisure",
  "name": "ScandiLeisure",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.63"
      }
    ]
  ]
};

export const ScandiLeisure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.90" />
      <circle cx="5.60" cy="8.80" r="0.42" />
      <circle cx="5.60" cy="12.00" r="0.41" />
      <circle cx="5.60" cy="15.20" r="0.41" />
      <circle cx="5.60" cy="18.40" r="0.41" />
      <circle cx="8.80" cy="5.60" r="0.82" />
      <circle cx="8.80" cy="8.80" r="0.78" />
      <circle cx="8.80" cy="12.00" r="1.06" />
      <circle cx="8.80" cy="15.20" r="0.52" />
      <circle cx="8.80" cy="18.40" r="1.09" />
      <circle cx="12.00" cy="5.60" r="0.73" />
      <circle cx="12.00" cy="8.80" r="0.54" />
      <circle cx="12.00" cy="12.00" r="1.03" />
      <circle cx="12.00" cy="15.20" r="0.58" />
      <circle cx="12.00" cy="18.40" r="0.37" />
      <circle cx="15.20" cy="5.60" r="0.90" />
      <circle cx="15.20" cy="8.80" r="1.02" />
      <circle cx="15.20" cy="12.00" r="0.61" />
      <circle cx="15.20" cy="15.20" r="0.97" />
      <circle cx="15.20" cy="18.40" r="0.48" />
      <circle cx="18.40" cy="5.60" r="0.41" />
      <circle cx="18.40" cy="8.80" r="1.06" />
      <circle cx="18.40" cy="12.00" r="0.39" />
      <circle cx="18.40" cy="15.20" r="0.60" />
      <circle cx="18.40" cy="18.40" r="0.63" />
      {children}
    </svg>
  );
});

export default ScandiLeisure;
