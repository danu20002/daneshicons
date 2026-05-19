import React from 'react';

export const iconData = {
  "id": "GamaJade",
  "name": "GamaJade",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.67 4.16 L 20.95 3.72 L 20.18 7.70 L 15.40 18.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.67",
        "cy": "4.16",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "20.95",
        "cy": "3.72",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "20.18",
        "cy": "7.70",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "15.40",
        "cy": "18.49",
        "r": "1.32"
      }
    ]
  ]
};

export const GamaJade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.67 4.16 L 20.95 3.72 L 20.18 7.70 L 15.40 18.49" />
      <circle cx="14.67" cy="4.16" r="0.60" />
      <circle cx="20.95" cy="3.72" r="0.60" />
      <circle cx="20.18" cy="7.70" r="0.69" />
      <circle cx="15.40" cy="18.49" r="1.32" />
      {children}
    </svg>
  );
});

export default GamaJade;
