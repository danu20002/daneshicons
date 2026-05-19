import React from 'react';

export const iconData = {
  "id": "FronoOnly",
  "name": "FronoOnly",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.72 5.51 L 19.12 6.58 L 19.39 3.44 L 13.87 13.02 L 13.85 3.51 L 11.22 11.46"
      }
    ],
    [
      "circle",
      {
        "cx": "5.72",
        "cy": "5.51",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "19.12",
        "cy": "6.58",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "19.39",
        "cy": "3.44",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "13.87",
        "cy": "13.02",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "13.85",
        "cy": "3.51",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "11.22",
        "cy": "11.46",
        "r": "1.14"
      }
    ]
  ]
};

export const FronoOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.72 5.51 L 19.12 6.58 L 19.39 3.44 L 13.87 13.02 L 13.85 3.51 L 11.22 11.46" />
      <circle cx="5.72" cy="5.51" r="0.99" />
      <circle cx="19.12" cy="6.58" r="0.72" />
      <circle cx="19.39" cy="3.44" r="1.06" />
      <circle cx="13.87" cy="13.02" r="0.78" />
      <circle cx="13.85" cy="3.51" r="0.56" />
      <circle cx="11.22" cy="11.46" r="1.14" />
      {children}
    </svg>
  );
});

export default FronoOnly;
