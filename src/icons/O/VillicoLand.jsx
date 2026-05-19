import React from 'react';

export const iconData = {
  "id": "VillicoLand",
  "name": "VillicoLand",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.60 19.97 L 5.93 12.91 L 19.92 11.90 L 8.72 14.37"
      }
    ],
    [
      "circle",
      {
        "cx": "21.60",
        "cy": "19.97",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "5.93",
        "cy": "12.91",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "19.92",
        "cy": "11.90",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "8.72",
        "cy": "14.37",
        "r": "0.51"
      }
    ]
  ]
};

export const VillicoLand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.60 19.97 L 5.93 12.91 L 19.92 11.90 L 8.72 14.37" />
      <circle cx="21.60" cy="19.97" r="0.59" />
      <circle cx="5.93" cy="12.91" r="0.76" />
      <circle cx="19.92" cy="11.90" r="1.18" />
      <circle cx="8.72" cy="14.37" r="0.51" />
      {children}
    </svg>
  );
});

export default VillicoLand;
