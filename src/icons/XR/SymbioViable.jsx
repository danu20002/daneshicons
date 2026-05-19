import React from 'react';

export const iconData = {
  "id": "SymbioViable",
  "name": "SymbioViable",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.00 12.73 L 7.35 16.95 L 21.05 3.80 L 7.06 6.51 L 20.24 20.62"
      }
    ],
    [
      "circle",
      {
        "cx": "17.00",
        "cy": "12.73",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "7.35",
        "cy": "16.95",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "21.05",
        "cy": "3.80",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "7.06",
        "cy": "6.51",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "20.24",
        "cy": "20.62",
        "r": "1.04"
      }
    ]
  ]
};

export const SymbioViable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.00 12.73 L 7.35 16.95 L 21.05 3.80 L 7.06 6.51 L 20.24 20.62" />
      <circle cx="17.00" cy="12.73" r="0.58" />
      <circle cx="7.35" cy="16.95" r="0.62" />
      <circle cx="21.05" cy="3.80" r="0.63" />
      <circle cx="7.06" cy="6.51" r="0.69" />
      <circle cx="20.24" cy="20.62" r="1.04" />
      {children}
    </svg>
  );
});

export default SymbioViable;
