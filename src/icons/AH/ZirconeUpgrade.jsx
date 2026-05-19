import React from 'react';

export const iconData = {
  "id": "ZirconeUpgrade",
  "name": "ZirconeUpgrade",
  "category": "AH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.61 12.99 L 3.15 6.80 L 18.34 3.57 L 7.35 3.59 L 7.59 3.68"
      }
    ],
    [
      "circle",
      {
        "cx": "8.61",
        "cy": "12.99",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "3.15",
        "cy": "6.80",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "18.34",
        "cy": "3.57",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "7.35",
        "cy": "3.59",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "7.59",
        "cy": "3.68",
        "r": "0.79"
      }
    ]
  ]
};

export const ZirconeUpgrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.61 12.99 L 3.15 6.80 L 18.34 3.57 L 7.35 3.59 L 7.59 3.68" />
      <circle cx="8.61" cy="12.99" r="0.65" />
      <circle cx="3.15" cy="6.80" r="0.55" />
      <circle cx="18.34" cy="3.57" r="0.78" />
      <circle cx="7.35" cy="3.59" r="1.06" />
      <circle cx="7.59" cy="3.68" r="0.79" />
      {children}
    </svg>
  );
});

export default ZirconeUpgrade;
