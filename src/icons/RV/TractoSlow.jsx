import React from 'react';

export const iconData = {
  "id": "TractoSlow",
  "name": "TractoSlow",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.83 8.37 L 8.27 18.55 L 18.05 6.40 L 2.21 14.62"
      }
    ],
    [
      "circle",
      {
        "cx": "2.83",
        "cy": "8.37",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "8.27",
        "cy": "18.55",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "18.05",
        "cy": "6.40",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "2.21",
        "cy": "14.62",
        "r": "0.85"
      }
    ]
  ]
};

export const TractoSlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.83 8.37 L 8.27 18.55 L 18.05 6.40 L 2.21 14.62" />
      <circle cx="2.83" cy="8.37" r="1.20" />
      <circle cx="8.27" cy="18.55" r="1.42" />
      <circle cx="18.05" cy="6.40" r="1.04" />
      <circle cx="2.21" cy="14.62" r="0.85" />
      {children}
    </svg>
  );
});

export default TractoSlow;
