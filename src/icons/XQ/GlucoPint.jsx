import React from 'react';

export const iconData = {
  "id": "GlucoPint",
  "name": "GlucoPint",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.07 19.80 L 4.70 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.07 19.80 L 3.43 14.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 20.46 L 3.43 14.33"
      }
    ],
    [
      "circle",
      {
        "cx": "12.07",
        "cy": "19.80",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.92",
        "cy": "11.47",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.70",
        "cy": "20.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.43",
        "cy": "14.33",
        "r": "1.5"
      }
    ]
  ]
};

export const GlucoPint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.07 19.80 L 4.70 20.46" />
      <path d="M 12.07 19.80 L 3.43 14.33" />
      <path d="M 4.70 20.46 L 3.43 14.33" />
      <circle cx="12.07" cy="19.80" r="1.5" />
      <circle cx="19.92" cy="11.47" r="1.5" />
      <circle cx="4.70" cy="20.46" r="1.5" />
      <circle cx="3.43" cy="14.33" r="1.5" />
      {children}
    </svg>
  );
});

export default GlucoPint;
