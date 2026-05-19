import React from 'react';

export const iconData = {
  "id": "SelectoEmbrace",
  "name": "SelectoEmbrace",
  "category": "KH",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.50"
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
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.34"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.31"
      }
    ]
  ]
};

export const SelectoEmbrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.02" />
      <circle cx="5.60" cy="8.80" r="0.76" />
      <circle cx="5.60" cy="12.00" r="0.75" />
      <circle cx="5.60" cy="15.20" r="0.50" />
      <circle cx="5.60" cy="18.40" r="0.41" />
      <circle cx="8.80" cy="5.60" r="0.74" />
      <circle cx="8.80" cy="8.80" r="0.69" />
      <circle cx="8.80" cy="12.00" r="0.49" />
      <circle cx="8.80" cy="15.20" r="0.93" />
      <circle cx="8.80" cy="18.40" r="0.34" />
      <circle cx="12.00" cy="5.60" r="0.52" />
      <circle cx="12.00" cy="8.80" r="0.63" />
      <circle cx="12.00" cy="12.00" r="0.64" />
      <circle cx="12.00" cy="15.20" r="0.77" />
      <circle cx="12.00" cy="18.40" r="1.08" />
      <circle cx="15.20" cy="5.60" r="0.91" />
      <circle cx="15.20" cy="8.80" r="1.09" />
      <circle cx="15.20" cy="12.00" r="0.53" />
      <circle cx="15.20" cy="15.20" r="0.91" />
      <circle cx="15.20" cy="18.40" r="0.38" />
      <circle cx="18.40" cy="5.60" r="1.04" />
      <circle cx="18.40" cy="8.80" r="0.71" />
      <circle cx="18.40" cy="12.00" r="1.03" />
      <circle cx="18.40" cy="15.20" r="0.89" />
      <circle cx="18.40" cy="18.40" r="0.31" />
      {children}
    </svg>
  );
});

export default SelectoEmbrace;
