import React from 'react';

export const iconData = {
  "id": "VateMetal",
  "name": "VateMetal",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.37 12.73 L 6.60 7.45"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "18.24",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.37",
        "cy": "12.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.60",
        "cy": "7.45",
        "r": "1.5"
      }
    ]
  ]
};

export const VateMetal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.37 12.73 L 6.60 7.45" />
      <circle cx="9.78" cy="18.24" r="1.5" />
      <circle cx="12.37" cy="12.73" r="1.5" />
      <circle cx="6.60" cy="7.45" r="1.5" />
      {children}
    </svg>
  );
});

export default VateMetal;
