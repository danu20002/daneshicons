import React from 'react';

export const iconData = {
  "id": "ZoccoloGreed",
  "name": "ZoccoloGreed",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.55 8.32 L 21.77 4.20 L 14.95 7.35 L 11.64 18.37 L 9.64 3.11 L 5.27 6.21 L 12.02 5.87"
      }
    ],
    [
      "circle",
      {
        "cx": "19.55",
        "cy": "8.32",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "21.77",
        "cy": "4.20",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "14.95",
        "cy": "7.35",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "11.64",
        "cy": "18.37",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "9.64",
        "cy": "3.11",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "5.27",
        "cy": "6.21",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.02",
        "cy": "5.87",
        "r": "1.16"
      }
    ]
  ]
};

export const ZoccoloGreed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.55 8.32 L 21.77 4.20 L 14.95 7.35 L 11.64 18.37 L 9.64 3.11 L 5.27 6.21 L 12.02 5.87" />
      <circle cx="19.55" cy="8.32" r="1.28" />
      <circle cx="21.77" cy="4.20" r="0.56" />
      <circle cx="14.95" cy="7.35" r="1.03" />
      <circle cx="11.64" cy="18.37" r="1.22" />
      <circle cx="9.64" cy="3.11" r="1.07" />
      <circle cx="5.27" cy="6.21" r="0.78" />
      <circle cx="12.02" cy="5.87" r="1.16" />
      {children}
    </svg>
  );
});

export default ZoccoloGreed;
