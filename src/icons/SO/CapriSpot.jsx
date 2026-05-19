import React from 'react';

export const iconData = {
  "id": "CapriSpot",
  "name": "CapriSpot",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 10.21 L 14.83 6.86 L 18.03 8.04 L 13.33 13.67 L 16.47 9.38 L 20.19 19.14 L 10.34 13.40"
      }
    ],
    [
      "circle",
      {
        "cx": "20.19",
        "cy": "10.21",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "14.83",
        "cy": "6.86",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.03",
        "cy": "8.04",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "13.67",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "16.47",
        "cy": "9.38",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "20.19",
        "cy": "19.14",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "10.34",
        "cy": "13.40",
        "r": "0.72"
      }
    ]
  ]
};

export const CapriSpot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 10.21 L 14.83 6.86 L 18.03 8.04 L 13.33 13.67 L 16.47 9.38 L 20.19 19.14 L 10.34 13.40" />
      <circle cx="20.19" cy="10.21" r="1.41" />
      <circle cx="14.83" cy="6.86" r="1.46" />
      <circle cx="18.03" cy="8.04" r="1.27" />
      <circle cx="13.33" cy="13.67" r="0.51" />
      <circle cx="16.47" cy="9.38" r="0.76" />
      <circle cx="20.19" cy="19.14" r="0.96" />
      <circle cx="10.34" cy="13.40" r="0.72" />
      {children}
    </svg>
  );
});

export default CapriSpot;
