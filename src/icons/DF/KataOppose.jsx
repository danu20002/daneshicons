import React from 'react';

export const iconData = {
  "id": "KataOppose",
  "name": "KataOppose",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 8.57 L 15.55 3.04 L 19.32 5.72 L 16.74 6.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.46",
        "cy": "8.57",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "15.55",
        "cy": "3.04",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "19.32",
        "cy": "5.72",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "16.74",
        "cy": "6.79",
        "r": "1.43"
      }
    ]
  ]
};

export const KataOppose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 8.57 L 15.55 3.04 L 19.32 5.72 L 16.74 6.79" />
      <circle cx="8.46" cy="8.57" r="1.06" />
      <circle cx="15.55" cy="3.04" r="0.70" />
      <circle cx="19.32" cy="5.72" r="1.18" />
      <circle cx="16.74" cy="6.79" r="1.43" />
      {children}
    </svg>
  );
});

export default KataOppose;
