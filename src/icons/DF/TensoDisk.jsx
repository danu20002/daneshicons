import React from 'react';

export const iconData = {
  "id": "TensoDisk",
  "name": "TensoDisk",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.46 13.20 L 5.66 16.08 L 18.82 6.18 L 16.69 10.90"
      }
    ],
    [
      "circle",
      {
        "cx": "17.46",
        "cy": "13.20",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "5.66",
        "cy": "16.08",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "18.82",
        "cy": "6.18",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "16.69",
        "cy": "10.90",
        "r": "1.27"
      }
    ]
  ]
};

export const TensoDisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.46 13.20 L 5.66 16.08 L 18.82 6.18 L 16.69 10.90" />
      <circle cx="17.46" cy="13.20" r="0.83" />
      <circle cx="5.66" cy="16.08" r="0.76" />
      <circle cx="18.82" cy="6.18" r="1.18" />
      <circle cx="16.69" cy="10.90" r="1.27" />
      {children}
    </svg>
  );
});

export default TensoDisk;
