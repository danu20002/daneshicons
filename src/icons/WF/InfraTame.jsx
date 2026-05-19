import React from 'react';

export const iconData = {
  "id": "InfraTame",
  "name": "InfraTame",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.32 7.91 L 10.95 17.70 L 8.52 6.80 L 6.55 17.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.32",
        "cy": "7.91",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "10.95",
        "cy": "17.70",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "8.52",
        "cy": "6.80",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "6.55",
        "cy": "17.83",
        "r": "0.63"
      }
    ]
  ]
};

export const InfraTame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.32 7.91 L 10.95 17.70 L 8.52 6.80 L 6.55 17.83" />
      <circle cx="10.32" cy="7.91" r="1.06" />
      <circle cx="10.95" cy="17.70" r="1.40" />
      <circle cx="8.52" cy="6.80" r="0.77" />
      <circle cx="6.55" cy="17.83" r="0.63" />
      {children}
    </svg>
  );
});

export default InfraTame;
