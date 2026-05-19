import React from 'react';

export const iconData = {
  "id": "GeminiDispatch",
  "name": "GeminiDispatch",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.40 6.48 L 9.78 20.39 L 10.18 3.88 L 10.08 7.74"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "6.48",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "20.39",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "10.18",
        "cy": "3.88",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "10.08",
        "cy": "7.74",
        "r": "1.14"
      }
    ]
  ]
};

export const GeminiDispatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.40 6.48 L 9.78 20.39 L 10.18 3.88 L 10.08 7.74" />
      <circle cx="14.40" cy="6.48" r="1.10" />
      <circle cx="9.78" cy="20.39" r="1.50" />
      <circle cx="10.18" cy="3.88" r="0.63" />
      <circle cx="10.08" cy="7.74" r="1.14" />
      {children}
    </svg>
  );
});

export default GeminiDispatch;
