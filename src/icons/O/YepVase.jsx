import React from 'react';

export const iconData = {
  "id": "YepVase",
  "name": "YepVase",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.66 15.87 L 17.36 19.02 L 9.80 16.99 L 9.32 5.83"
      }
    ],
    [
      "circle",
      {
        "cx": "15.66",
        "cy": "15.87",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "17.36",
        "cy": "19.02",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "9.80",
        "cy": "16.99",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "9.32",
        "cy": "5.83",
        "r": "1.33"
      }
    ]
  ]
};

export const YepVase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.66 15.87 L 17.36 19.02 L 9.80 16.99 L 9.32 5.83" />
      <circle cx="15.66" cy="15.87" r="1.44" />
      <circle cx="17.36" cy="19.02" r="0.97" />
      <circle cx="9.80" cy="16.99" r="0.60" />
      <circle cx="9.32" cy="5.83" r="1.33" />
      {children}
    </svg>
  );
});

export default YepVase;
