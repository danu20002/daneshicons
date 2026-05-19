import React from 'react';

export const iconData = {
  "id": "VellicoImprove",
  "name": "VellicoImprove",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.83 12.00 L 5.13 3.90 L 11.61 3.66 L 6.51 3.60"
      }
    ],
    [
      "circle",
      {
        "cx": "16.83",
        "cy": "12.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "5.13",
        "cy": "3.90",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "11.61",
        "cy": "3.66",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "6.51",
        "cy": "3.60",
        "r": "1.22"
      }
    ]
  ]
};

export const VellicoImprove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.83 12.00 L 5.13 3.90 L 11.61 3.66 L 6.51 3.60" />
      <circle cx="16.83" cy="12.00" r="1.09" />
      <circle cx="5.13" cy="3.90" r="1.05" />
      <circle cx="11.61" cy="3.66" r="1.40" />
      <circle cx="6.51" cy="3.60" r="1.22" />
      {children}
    </svg>
  );
});

export default VellicoImprove;
