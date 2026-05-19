import React from 'react';

export const iconData = {
  "id": "CoeloLab",
  "name": "CoeloLab",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 12.43 L 4.97 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.43 L 14.79 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.43 L 18.66 9.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 6.27 L 14.79 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 6.27 L 18.66 9.80"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 15.96 L 18.66 9.80"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 15.96 L 3.61 12.84"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 9.80 L 3.61 12.84"
      }
    ],
    [
      "circle",
      {
        "cx": "3.94",
        "cy": "12.43",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.97",
        "cy": "6.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.79",
        "cy": "15.96",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.66",
        "cy": "9.80",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.61",
        "cy": "12.84",
        "r": "1.5"
      }
    ]
  ]
};

export const CoeloLab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 12.43 L 4.97 6.27" />
      <path d="M 3.94 12.43 L 14.79 15.96" />
      <path d="M 3.94 12.43 L 18.66 9.80" />
      <path d="M 4.97 6.27 L 14.79 15.96" />
      <path d="M 4.97 6.27 L 18.66 9.80" />
      <path d="M 14.79 15.96 L 18.66 9.80" />
      <path d="M 14.79 15.96 L 3.61 12.84" />
      <path d="M 18.66 9.80 L 3.61 12.84" />
      <circle cx="3.94" cy="12.43" r="1.5" />
      <circle cx="4.97" cy="6.27" r="1.5" />
      <circle cx="14.79" cy="15.96" r="1.5" />
      <circle cx="18.66" cy="9.80" r="1.5" />
      <circle cx="3.61" cy="12.84" r="1.5" />
      {children}
    </svg>
  );
});

export default CoeloLab;
