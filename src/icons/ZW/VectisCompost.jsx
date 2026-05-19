import React from 'react';

export const iconData = {
  "id": "VectisCompost",
  "name": "VectisCompost",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.35 18.42 L 17.12 16.13 L 14.38 20.92 L 8.35 16.85 L 14.81 14.46 L 6.99 10.66"
      }
    ],
    [
      "circle",
      {
        "cx": "5.35",
        "cy": "18.42",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "17.12",
        "cy": "16.13",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "14.38",
        "cy": "20.92",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "8.35",
        "cy": "16.85",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.81",
        "cy": "14.46",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "6.99",
        "cy": "10.66",
        "r": "1.15"
      }
    ]
  ]
};

export const VectisCompost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.35 18.42 L 17.12 16.13 L 14.38 20.92 L 8.35 16.85 L 14.81 14.46 L 6.99 10.66" />
      <circle cx="5.35" cy="18.42" r="0.91" />
      <circle cx="17.12" cy="16.13" r="1.26" />
      <circle cx="14.38" cy="20.92" r="1.29" />
      <circle cx="8.35" cy="16.85" r="0.77" />
      <circle cx="14.81" cy="14.46" r="0.95" />
      <circle cx="6.99" cy="10.66" r="1.15" />
      {children}
    </svg>
  );
});

export default VectisCompost;
