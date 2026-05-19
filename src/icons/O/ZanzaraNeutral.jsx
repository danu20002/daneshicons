import React from 'react';

export const iconData = {
  "id": "ZanzaraNeutral",
  "name": "ZanzaraNeutral",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.78 21.45 L 8.78 13.99 L 15.11 12.18 L 18.74 14.60 L 14.32 8.29 L 3.87 15.05 L 2.24 2.19"
      }
    ],
    [
      "circle",
      {
        "cx": "6.78",
        "cy": "21.45",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "8.78",
        "cy": "13.99",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "15.11",
        "cy": "12.18",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "18.74",
        "cy": "14.60",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "8.29",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "3.87",
        "cy": "15.05",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "2.24",
        "cy": "2.19",
        "r": "1.37"
      }
    ]
  ]
};

export const ZanzaraNeutral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.78 21.45 L 8.78 13.99 L 15.11 12.18 L 18.74 14.60 L 14.32 8.29 L 3.87 15.05 L 2.24 2.19" />
      <circle cx="6.78" cy="21.45" r="0.65" />
      <circle cx="8.78" cy="13.99" r="1.02" />
      <circle cx="15.11" cy="12.18" r="0.50" />
      <circle cx="18.74" cy="14.60" r="1.30" />
      <circle cx="14.32" cy="8.29" r="1.45" />
      <circle cx="3.87" cy="15.05" r="0.78" />
      <circle cx="2.24" cy="2.19" r="1.37" />
      {children}
    </svg>
  );
});

export default ZanzaraNeutral;
