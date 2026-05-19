import React from 'react';

export const iconData = {
  "id": "StrettoHope",
  "name": "StrettoHope",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.55 15.30 L 12.63 5.98 L 4.17 6.28 L 18.02 18.16 L 17.72 14.64"
      }
    ],
    [
      "circle",
      {
        "cx": "17.55",
        "cy": "15.30",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "12.63",
        "cy": "5.98",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "4.17",
        "cy": "6.28",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "18.02",
        "cy": "18.16",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "17.72",
        "cy": "14.64",
        "r": "0.99"
      }
    ]
  ]
};

export const StrettoHope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.55 15.30 L 12.63 5.98 L 4.17 6.28 L 18.02 18.16 L 17.72 14.64" />
      <circle cx="17.55" cy="15.30" r="1.13" />
      <circle cx="12.63" cy="5.98" r="0.66" />
      <circle cx="4.17" cy="6.28" r="1.24" />
      <circle cx="18.02" cy="18.16" r="1.15" />
      <circle cx="17.72" cy="14.64" r="0.99" />
      {children}
    </svg>
  );
});

export default StrettoHope;
