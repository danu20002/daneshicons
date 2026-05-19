import React from 'react';

export const iconData = {
  "id": "FiberDot",
  "name": "FiberDot",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.47 8.26 L 20.30 16.08 L 17.26 11.77 L 8.90 2.56 L 4.54 10.70 L 3.54 12.51 L 6.34 17.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.47",
        "cy": "8.26",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "20.30",
        "cy": "16.08",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "17.26",
        "cy": "11.77",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "8.90",
        "cy": "2.56",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "4.54",
        "cy": "10.70",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "3.54",
        "cy": "12.51",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "6.34",
        "cy": "17.26",
        "r": "1.27"
      }
    ]
  ]
};

export const FiberDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.47 8.26 L 20.30 16.08 L 17.26 11.77 L 8.90 2.56 L 4.54 10.70 L 3.54 12.51 L 6.34 17.26" />
      <circle cx="8.47" cy="8.26" r="1.31" />
      <circle cx="20.30" cy="16.08" r="1.10" />
      <circle cx="17.26" cy="11.77" r="1.36" />
      <circle cx="8.90" cy="2.56" r="1.16" />
      <circle cx="4.54" cy="10.70" r="1.11" />
      <circle cx="3.54" cy="12.51" r="0.88" />
      <circle cx="6.34" cy="17.26" r="1.27" />
      {children}
    </svg>
  );
});

export default FiberDot;
