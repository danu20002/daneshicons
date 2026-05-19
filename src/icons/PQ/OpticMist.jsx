import React from 'react';

export const iconData = {
  "id": "OpticMist",
  "name": "OpticMist",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 8.82 L 12.17 7.21 L 2.06 13.35 L 18.46 18.10"
      }
    ],
    [
      "circle",
      {
        "cx": "8.85",
        "cy": "8.82",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.17",
        "cy": "7.21",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "2.06",
        "cy": "13.35",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.46",
        "cy": "18.10",
        "r": "1.42"
      }
    ]
  ]
};

export const OpticMist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 8.82 L 12.17 7.21 L 2.06 13.35 L 18.46 18.10" />
      <circle cx="8.85" cy="8.82" r="1.46" />
      <circle cx="12.17" cy="7.21" r="1.17" />
      <circle cx="2.06" cy="13.35" r="0.73" />
      <circle cx="18.46" cy="18.10" r="1.42" />
      {children}
    </svg>
  );
});

export default OpticMist;
