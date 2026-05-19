import React from 'react';

export const iconData = {
  "id": "SagittaKindle",
  "name": "SagittaKindle",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.68 6.53 L 11.20 13.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 6.53 L 12.83 9.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 6.53 L 13.80 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 11.20 13.33 L 13.80 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.83 9.51 L 13.80 17.93"
      }
    ],
    [
      "circle",
      {
        "cx": "5.68",
        "cy": "6.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.20",
        "cy": "13.33",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.83",
        "cy": "9.51",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.80",
        "cy": "17.93",
        "r": "1.5"
      }
    ]
  ]
};

export const SagittaKindle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.68 6.53 L 11.20 13.33" />
      <path d="M 5.68 6.53 L 12.83 9.51" />
      <path d="M 5.68 6.53 L 13.80 17.93" />
      <path d="M 11.20 13.33 L 13.80 17.93" />
      <path d="M 12.83 9.51 L 13.80 17.93" />
      <circle cx="5.68" cy="6.53" r="1.5" />
      <circle cx="11.20" cy="13.33" r="1.5" />
      <circle cx="12.83" cy="9.51" r="1.5" />
      <circle cx="13.80" cy="17.93" r="1.5" />
      {children}
    </svg>
  );
});

export default SagittaKindle;
