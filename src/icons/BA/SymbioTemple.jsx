import React from 'react';

export const iconData = {
  "id": "SymbioTemple",
  "name": "SymbioTemple",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.99 5.14 L 2.17 13.38 L 5.26 6.69 L 2.06 15.72 L 18.03 12.44"
      }
    ],
    [
      "circle",
      {
        "cx": "14.99",
        "cy": "5.14",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "2.17",
        "cy": "13.38",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "5.26",
        "cy": "6.69",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "2.06",
        "cy": "15.72",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.03",
        "cy": "12.44",
        "r": "1.25"
      }
    ]
  ]
};

export const SymbioTemple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.99 5.14 L 2.17 13.38 L 5.26 6.69 L 2.06 15.72 L 18.03 12.44" />
      <circle cx="14.99" cy="5.14" r="1.38" />
      <circle cx="2.17" cy="13.38" r="1.04" />
      <circle cx="5.26" cy="6.69" r="1.47" />
      <circle cx="2.06" cy="15.72" r="0.66" />
      <circle cx="18.03" cy="12.44" r="1.25" />
      {children}
    </svg>
  );
});

export default SymbioTemple;
