import React from 'react';

export const iconData = {
  "id": "PhasoHurt",
  "name": "PhasoHurt",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.47 6.67 L 12.98 7.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.47 6.67 L 15.76 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 15.59 L 15.76 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.98 7.92 L 15.76 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 15.76 14.08 L 8.07 15.62"
      }
    ],
    [
      "circle",
      {
        "cx": "12.47",
        "cy": "6.67",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.61",
        "cy": "15.59",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.98",
        "cy": "7.92",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.76",
        "cy": "14.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.07",
        "cy": "15.62",
        "r": "1.5"
      }
    ]
  ]
};

export const PhasoHurt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.47 6.67 L 12.98 7.92" />
      <path d="M 12.47 6.67 L 15.76 14.08" />
      <path d="M 8.61 15.59 L 15.76 14.08" />
      <path d="M 12.98 7.92 L 15.76 14.08" />
      <path d="M 15.76 14.08 L 8.07 15.62" />
      <circle cx="12.47" cy="6.67" r="1.5" />
      <circle cx="8.61" cy="15.59" r="1.5" />
      <circle cx="12.98" cy="7.92" r="1.5" />
      <circle cx="15.76" cy="14.08" r="1.5" />
      <circle cx="8.07" cy="15.62" r="1.5" />
      {children}
    </svg>
  );
});

export default PhasoHurt;
