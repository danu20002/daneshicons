import React from 'react';

export const iconData = {
  "id": "VulgoScorn",
  "name": "VulgoScorn",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 18.18 L 19.90 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 11.26 18.18 L 4.75 18.60"
      }
    ],
    [
      "circle",
      {
        "cx": "11.26",
        "cy": "18.18",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.90",
        "cy": "16.81",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.75",
        "cy": "18.60",
        "r": "1.5"
      }
    ]
  ]
};

export const VulgoScorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 18.18 L 19.90 16.81" />
      <path d="M 11.26 18.18 L 4.75 18.60" />
      <circle cx="11.26" cy="18.18" r="1.5" />
      <circle cx="19.90" cy="16.81" r="1.5" />
      <circle cx="4.75" cy="18.60" r="1.5" />
      {children}
    </svg>
  );
});

export default VulgoScorn;
