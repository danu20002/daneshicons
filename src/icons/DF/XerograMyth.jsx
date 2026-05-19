import React from 'react';

export const iconData = {
  "id": "XerograMyth",
  "name": "XerograMyth",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 15.89 L 14.43 20.95 L 18.80 18.34 L 20.60 6.22 L 14.92 16.15"
      }
    ],
    [
      "circle",
      {
        "cx": "8.25",
        "cy": "15.89",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "14.43",
        "cy": "20.95",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.80",
        "cy": "18.34",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "20.60",
        "cy": "6.22",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.92",
        "cy": "16.15",
        "r": "1.44"
      }
    ]
  ]
};

export const XerograMyth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 15.89 L 14.43 20.95 L 18.80 18.34 L 20.60 6.22 L 14.92 16.15" />
      <circle cx="8.25" cy="15.89" r="0.91" />
      <circle cx="14.43" cy="20.95" r="1.34" />
      <circle cx="18.80" cy="18.34" r="1.09" />
      <circle cx="20.60" cy="6.22" r="0.61" />
      <circle cx="14.92" cy="16.15" r="1.44" />
      {children}
    </svg>
  );
});

export default XerograMyth;
