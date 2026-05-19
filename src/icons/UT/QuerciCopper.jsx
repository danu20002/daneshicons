import React from 'react';

export const iconData = {
  "id": "QuerciCopper",
  "name": "QuerciCopper",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.24 12.66 L 14.51 3.20 L 10.71 12.26 L 7.80 13.57 L 20.15 14.70 L 9.05 15.66"
      }
    ],
    [
      "circle",
      {
        "cx": "7.24",
        "cy": "12.66",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "14.51",
        "cy": "3.20",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "10.71",
        "cy": "12.26",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "7.80",
        "cy": "13.57",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "20.15",
        "cy": "14.70",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "9.05",
        "cy": "15.66",
        "r": "0.80"
      }
    ]
  ]
};

export const QuerciCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.24 12.66 L 14.51 3.20 L 10.71 12.26 L 7.80 13.57 L 20.15 14.70 L 9.05 15.66" />
      <circle cx="7.24" cy="12.66" r="0.68" />
      <circle cx="14.51" cy="3.20" r="1.10" />
      <circle cx="10.71" cy="12.26" r="1.38" />
      <circle cx="7.80" cy="13.57" r="0.96" />
      <circle cx="20.15" cy="14.70" r="0.78" />
      <circle cx="9.05" cy="15.66" r="0.80" />
      {children}
    </svg>
  );
});

export default QuerciCopper;
