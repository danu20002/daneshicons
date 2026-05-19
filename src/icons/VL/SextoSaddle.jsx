import React from 'react';

export const iconData = {
  "id": "SextoSaddle",
  "name": "SextoSaddle",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.71 12.48 L 9.99 12.72"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 12.48 L 14.20 12.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 12.48 L 13.78 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 12.48 L 5.99 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.20 12.31 L 5.99 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 13.78 15.06 L 5.99 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 13.78 15.06 L 7.29 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 3.52 L 7.29 18.89"
      }
    ],
    [
      "circle",
      {
        "cx": "8.71",
        "cy": "12.48",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.99",
        "cy": "12.72",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.20",
        "cy": "12.31",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.78",
        "cy": "15.06",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.99",
        "cy": "3.52",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.29",
        "cy": "18.89",
        "r": "1.5"
      }
    ]
  ]
};

export const SextoSaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.71 12.48 L 9.99 12.72" />
      <path d="M 8.71 12.48 L 14.20 12.31" />
      <path d="M 8.71 12.48 L 13.78 15.06" />
      <path d="M 8.71 12.48 L 5.99 3.52" />
      <path d="M 14.20 12.31 L 5.99 3.52" />
      <path d="M 13.78 15.06 L 5.99 3.52" />
      <path d="M 13.78 15.06 L 7.29 18.89" />
      <path d="M 5.99 3.52 L 7.29 18.89" />
      <circle cx="8.71" cy="12.48" r="1.5" />
      <circle cx="9.99" cy="12.72" r="1.5" />
      <circle cx="14.20" cy="12.31" r="1.5" />
      <circle cx="13.78" cy="15.06" r="1.5" />
      <circle cx="5.99" cy="3.52" r="1.5" />
      <circle cx="7.29" cy="18.89" r="1.5" />
      {children}
    </svg>
  );
});

export default SextoSaddle;
