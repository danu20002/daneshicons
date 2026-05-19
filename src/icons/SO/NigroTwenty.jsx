import React from 'react';

export const iconData = {
  "id": "NigroTwenty",
  "name": "NigroTwenty",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.80 7.99 L 16.95 16.54 L 7.80 14.05 L 16.03 3.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.80",
        "cy": "7.99",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "16.95",
        "cy": "16.54",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "7.80",
        "cy": "14.05",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "3.33",
        "r": "1.01"
      }
    ]
  ]
};

export const NigroTwenty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.80 7.99 L 16.95 16.54 L 7.80 14.05 L 16.03 3.33" />
      <circle cx="10.80" cy="7.99" r="1.11" />
      <circle cx="16.95" cy="16.54" r="0.98" />
      <circle cx="7.80" cy="14.05" r="0.89" />
      <circle cx="16.03" cy="3.33" r="1.01" />
      {children}
    </svg>
  );
});

export default NigroTwenty;
