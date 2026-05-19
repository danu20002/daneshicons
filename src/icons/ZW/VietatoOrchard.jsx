import React from 'react';

export const iconData = {
  "id": "VietatoOrchard",
  "name": "VietatoOrchard",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 19.03 L 20.75 10.93 L 13.15 12.28 L 7.90 3.83 L 6.88 6.08 L 20.93 13.64 L 13.69 16.54"
      }
    ],
    [
      "circle",
      {
        "cx": "9.85",
        "cy": "19.03",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "20.75",
        "cy": "10.93",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "13.15",
        "cy": "12.28",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "7.90",
        "cy": "3.83",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "6.88",
        "cy": "6.08",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "20.93",
        "cy": "13.64",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "13.69",
        "cy": "16.54",
        "r": "1.38"
      }
    ]
  ]
};

export const VietatoOrchard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 19.03 L 20.75 10.93 L 13.15 12.28 L 7.90 3.83 L 6.88 6.08 L 20.93 13.64 L 13.69 16.54" />
      <circle cx="9.85" cy="19.03" r="1.15" />
      <circle cx="20.75" cy="10.93" r="1.45" />
      <circle cx="13.15" cy="12.28" r="0.50" />
      <circle cx="7.90" cy="3.83" r="1.04" />
      <circle cx="6.88" cy="6.08" r="0.71" />
      <circle cx="20.93" cy="13.64" r="1.49" />
      <circle cx="13.69" cy="16.54" r="1.38" />
      {children}
    </svg>
  );
});

export default VietatoOrchard;
