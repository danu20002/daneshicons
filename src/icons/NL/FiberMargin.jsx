import React from 'react';

export const iconData = {
  "id": "FiberMargin",
  "name": "FiberMargin",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.37 13.30 L 15.65 8.68 L 18.52 15.70 L 6.34 11.71 L 12.81 6.40 L 7.07 5.32 L 13.50 13.07"
      }
    ],
    [
      "circle",
      {
        "cx": "13.37",
        "cy": "13.30",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "15.65",
        "cy": "8.68",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "18.52",
        "cy": "15.70",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "6.34",
        "cy": "11.71",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "12.81",
        "cy": "6.40",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "7.07",
        "cy": "5.32",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "13.50",
        "cy": "13.07",
        "r": "1.09"
      }
    ]
  ]
};

export const FiberMargin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.37 13.30 L 15.65 8.68 L 18.52 15.70 L 6.34 11.71 L 12.81 6.40 L 7.07 5.32 L 13.50 13.07" />
      <circle cx="13.37" cy="13.30" r="1.42" />
      <circle cx="15.65" cy="8.68" r="1.14" />
      <circle cx="18.52" cy="15.70" r="0.87" />
      <circle cx="6.34" cy="11.71" r="1.24" />
      <circle cx="12.81" cy="6.40" r="1.05" />
      <circle cx="7.07" cy="5.32" r="1.24" />
      <circle cx="13.50" cy="13.07" r="1.09" />
      {children}
    </svg>
  );
});

export default FiberMargin;
