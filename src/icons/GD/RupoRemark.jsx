import React from 'react';

export const iconData = {
  "id": "RupoRemark",
  "name": "RupoRemark",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.60 12.48 L 10.15 18.26 L 13.10 3.59 L 7.18 21.49 L 4.33 2.85"
      }
    ],
    [
      "circle",
      {
        "cx": "12.60",
        "cy": "12.48",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "10.15",
        "cy": "18.26",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "13.10",
        "cy": "3.59",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "7.18",
        "cy": "21.49",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "4.33",
        "cy": "2.85",
        "r": "1.26"
      }
    ]
  ]
};

export const RupoRemark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.60 12.48 L 10.15 18.26 L 13.10 3.59 L 7.18 21.49 L 4.33 2.85" />
      <circle cx="12.60" cy="12.48" r="1.02" />
      <circle cx="10.15" cy="18.26" r="1.09" />
      <circle cx="13.10" cy="3.59" r="1.30" />
      <circle cx="7.18" cy="21.49" r="1.09" />
      <circle cx="4.33" cy="2.85" r="1.26" />
      {children}
    </svg>
  );
});

export default RupoRemark;
