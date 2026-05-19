import React from 'react';

export const iconData = {
  "id": "ContraMain",
  "name": "ContraMain",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.24 6.00 L 4.90 9.98"
      }
    ],
    [
      "path",
      {
        "d": "M 9.24 6.00 L 12.54 8.40"
      }
    ],
    [
      "path",
      {
        "d": "M 14.94 18.49 L 4.90 9.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.94 18.49 L 12.54 8.40"
      }
    ],
    [
      "circle",
      {
        "cx": "9.24",
        "cy": "6.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.94",
        "cy": "18.49",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.90",
        "cy": "9.98",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.54",
        "cy": "8.40",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.90",
        "cy": "8.73",
        "r": "1.5"
      }
    ]
  ]
};

export const ContraMain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.24 6.00 L 4.90 9.98" />
      <path d="M 9.24 6.00 L 12.54 8.40" />
      <path d="M 14.94 18.49 L 4.90 9.98" />
      <path d="M 14.94 18.49 L 12.54 8.40" />
      <circle cx="9.24" cy="6.00" r="1.5" />
      <circle cx="14.94" cy="18.49" r="1.5" />
      <circle cx="4.90" cy="9.98" r="1.5" />
      <circle cx="12.54" cy="8.40" r="1.5" />
      <circle cx="16.90" cy="8.73" r="1.5" />
      {children}
    </svg>
  );
});

export default ContraMain;
