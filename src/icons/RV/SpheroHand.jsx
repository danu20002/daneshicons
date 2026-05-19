import React from 'react';

export const iconData = {
  "id": "SpheroHand",
  "name": "SpheroHand",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 17.63 L 17.11 21.11 L 12.57 6.37 L 14.23 14.90 L 19.15 5.84 L 4.61 7.13 L 8.34 6.64"
      }
    ],
    [
      "circle",
      {
        "cx": "9.63",
        "cy": "17.63",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "17.11",
        "cy": "21.11",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "12.57",
        "cy": "6.37",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "14.23",
        "cy": "14.90",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "19.15",
        "cy": "5.84",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.61",
        "cy": "7.13",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "8.34",
        "cy": "6.64",
        "r": "1.01"
      }
    ]
  ]
};

export const SpheroHand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 17.63 L 17.11 21.11 L 12.57 6.37 L 14.23 14.90 L 19.15 5.84 L 4.61 7.13 L 8.34 6.64" />
      <circle cx="9.63" cy="17.63" r="1.23" />
      <circle cx="17.11" cy="21.11" r="1.12" />
      <circle cx="12.57" cy="6.37" r="0.92" />
      <circle cx="14.23" cy="14.90" r="1.49" />
      <circle cx="19.15" cy="5.84" r="1.24" />
      <circle cx="4.61" cy="7.13" r="1.46" />
      <circle cx="8.34" cy="6.64" r="1.01" />
      {children}
    </svg>
  );
});

export default SpheroHand;
