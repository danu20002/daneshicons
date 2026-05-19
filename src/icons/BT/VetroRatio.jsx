import React from 'react';

export const iconData = {
  "id": "VetroRatio",
  "name": "VetroRatio",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.95 8.90 L 8.24 13.05 L 19.61 17.37 L 14.32 18.30 L 4.22 6.03 L 12.12 11.90 L 19.05 11.30"
      }
    ],
    [
      "circle",
      {
        "cx": "6.95",
        "cy": "8.90",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "8.24",
        "cy": "13.05",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "19.61",
        "cy": "17.37",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "18.30",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "4.22",
        "cy": "6.03",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "12.12",
        "cy": "11.90",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "19.05",
        "cy": "11.30",
        "r": "0.57"
      }
    ]
  ]
};

export const VetroRatio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.95 8.90 L 8.24 13.05 L 19.61 17.37 L 14.32 18.30 L 4.22 6.03 L 12.12 11.90 L 19.05 11.30" />
      <circle cx="6.95" cy="8.90" r="0.51" />
      <circle cx="8.24" cy="13.05" r="0.63" />
      <circle cx="19.61" cy="17.37" r="1.43" />
      <circle cx="14.32" cy="18.30" r="0.76" />
      <circle cx="4.22" cy="6.03" r="0.53" />
      <circle cx="12.12" cy="11.90" r="1.17" />
      <circle cx="19.05" cy="11.30" r="0.57" />
      {children}
    </svg>
  );
});

export default VetroRatio;
