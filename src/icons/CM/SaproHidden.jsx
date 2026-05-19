import React from 'react';

export const iconData = {
  "id": "SaproHidden",
  "name": "SaproHidden",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.35 5.88 L 9.93 20.87 L 12.29 5.30 L 18.00 2.41 L 18.22 8.53 L 18.90 20.31 L 15.25 2.35"
      }
    ],
    [
      "circle",
      {
        "cx": "16.35",
        "cy": "5.88",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "9.93",
        "cy": "20.87",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "12.29",
        "cy": "5.30",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "2.41",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "18.22",
        "cy": "8.53",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.90",
        "cy": "20.31",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "15.25",
        "cy": "2.35",
        "r": "1.00"
      }
    ]
  ]
};

export const SaproHidden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.35 5.88 L 9.93 20.87 L 12.29 5.30 L 18.00 2.41 L 18.22 8.53 L 18.90 20.31 L 15.25 2.35" />
      <circle cx="16.35" cy="5.88" r="1.38" />
      <circle cx="9.93" cy="20.87" r="0.80" />
      <circle cx="12.29" cy="5.30" r="0.70" />
      <circle cx="18.00" cy="2.41" r="0.70" />
      <circle cx="18.22" cy="8.53" r="1.36" />
      <circle cx="18.90" cy="20.31" r="0.64" />
      <circle cx="15.25" cy="2.35" r="1.00" />
      {children}
    </svg>
  );
});

export default SaproHidden;
