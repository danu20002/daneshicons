import React from 'react';

export const iconData = {
  "id": "GeoKindle",
  "name": "GeoKindle",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.27 16.83 L 12.17 13.99 L 10.45 5.45 L 18.41 4.61"
      }
    ],
    [
      "circle",
      {
        "cx": "19.27",
        "cy": "16.83",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "12.17",
        "cy": "13.99",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "10.45",
        "cy": "5.45",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "18.41",
        "cy": "4.61",
        "r": "0.93"
      }
    ]
  ]
};

export const GeoKindle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.27 16.83 L 12.17 13.99 L 10.45 5.45 L 18.41 4.61" />
      <circle cx="19.27" cy="16.83" r="1.21" />
      <circle cx="12.17" cy="13.99" r="1.07" />
      <circle cx="10.45" cy="5.45" r="0.72" />
      <circle cx="18.41" cy="4.61" r="0.93" />
      {children}
    </svg>
  );
});

export default GeoKindle;
