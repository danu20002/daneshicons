import React from 'react';

export const iconData = {
  "id": "ChronoUnion",
  "name": "ChronoUnion",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 5.53 L 5.44 4.09"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 5.53 L 20.84 9.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 4.09 L 20.84 9.80"
      }
    ],
    [
      "circle",
      {
        "cx": "4.66",
        "cy": "5.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.44",
        "cy": "4.09",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.84",
        "cy": "9.80",
        "r": "1.5"
      }
    ]
  ]
};

export const ChronoUnion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 5.53 L 5.44 4.09" />
      <path d="M 4.66 5.53 L 20.84 9.80" />
      <path d="M 5.44 4.09 L 20.84 9.80" />
      <circle cx="4.66" cy="5.53" r="1.5" />
      <circle cx="5.44" cy="4.09" r="1.5" />
      <circle cx="20.84" cy="9.80" r="1.5" />
      {children}
    </svg>
  );
});

export default ChronoUnion;
