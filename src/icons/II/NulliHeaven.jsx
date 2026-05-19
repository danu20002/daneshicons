import React from 'react';

export const iconData = {
  "id": "NulliHeaven",
  "name": "NulliHeaven",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 12.95 L 7.40 20.57 L 4.23 19.87 L 19.07 14.51"
      }
    ],
    [
      "circle",
      {
        "cx": "2.24",
        "cy": "12.95",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "7.40",
        "cy": "20.57",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "4.23",
        "cy": "19.87",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "19.07",
        "cy": "14.51",
        "r": "1.32"
      }
    ]
  ]
};

export const NulliHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 12.95 L 7.40 20.57 L 4.23 19.87 L 19.07 14.51" />
      <circle cx="2.24" cy="12.95" r="0.95" />
      <circle cx="7.40" cy="20.57" r="0.96" />
      <circle cx="4.23" cy="19.87" r="1.37" />
      <circle cx="19.07" cy="14.51" r="1.32" />
      {children}
    </svg>
  );
});

export default NulliHeaven;
