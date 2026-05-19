import React from 'react';

export const iconData = {
  "id": "HaptoFlex",
  "name": "HaptoFlex",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.35 3.68 L 10.45 13.37 L 3.27 18.39 L 8.18 18.71 L 11.40 9.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.35",
        "cy": "3.68",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "10.45",
        "cy": "13.37",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "3.27",
        "cy": "18.39",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "8.18",
        "cy": "18.71",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "11.40",
        "cy": "9.78",
        "r": "0.63"
      }
    ]
  ]
};

export const HaptoFlex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.35 3.68 L 10.45 13.37 L 3.27 18.39 L 8.18 18.71 L 11.40 9.78" />
      <circle cx="12.35" cy="3.68" r="0.94" />
      <circle cx="10.45" cy="13.37" r="1.26" />
      <circle cx="3.27" cy="18.39" r="1.38" />
      <circle cx="8.18" cy="18.71" r="0.80" />
      <circle cx="11.40" cy="9.78" r="0.63" />
      {children}
    </svg>
  );
});

export default HaptoFlex;
