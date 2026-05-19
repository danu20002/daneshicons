import React from 'react';

export const iconData = {
  "id": "CoeloOvert",
  "name": "CoeloOvert",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 5.15 L 4.56 14.81 L 19.09 9.66 L 16.28 16.11 L 11.32 16.92"
      }
    ],
    [
      "circle",
      {
        "cx": "19.00",
        "cy": "5.15",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "4.56",
        "cy": "14.81",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "19.09",
        "cy": "9.66",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "16.28",
        "cy": "16.11",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "11.32",
        "cy": "16.92",
        "r": "1.36"
      }
    ]
  ]
};

export const CoeloOvert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 5.15 L 4.56 14.81 L 19.09 9.66 L 16.28 16.11 L 11.32 16.92" />
      <circle cx="19.00" cy="5.15" r="0.93" />
      <circle cx="4.56" cy="14.81" r="0.69" />
      <circle cx="19.09" cy="9.66" r="0.65" />
      <circle cx="16.28" cy="16.11" r="0.63" />
      <circle cx="11.32" cy="16.92" r="1.36" />
      {children}
    </svg>
  );
});

export default CoeloOvert;
