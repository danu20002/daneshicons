import React from 'react';

export const iconData = {
  "id": "VisivoUnable",
  "name": "VisivoUnable",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.03 2.03 L 19.56 17.51 L 7.07 2.42 L 18.97 2.35 L 18.12 18.92"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "2.03",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "19.56",
        "cy": "17.51",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "7.07",
        "cy": "2.42",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.97",
        "cy": "2.35",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "18.12",
        "cy": "18.92",
        "r": "0.73"
      }
    ]
  ]
};

export const VisivoUnable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.03 2.03 L 19.56 17.51 L 7.07 2.42 L 18.97 2.35 L 18.12 18.92" />
      <circle cx="16.03" cy="2.03" r="1.15" />
      <circle cx="19.56" cy="17.51" r="1.21" />
      <circle cx="7.07" cy="2.42" r="0.92" />
      <circle cx="18.97" cy="2.35" r="1.26" />
      <circle cx="18.12" cy="18.92" r="0.73" />
      {children}
    </svg>
  );
});

export default VisivoUnable;
