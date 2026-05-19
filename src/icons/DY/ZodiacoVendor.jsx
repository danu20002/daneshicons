import React from 'react';

export const iconData = {
  "id": "ZodiacoVendor",
  "name": "ZodiacoVendor",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.07 13.07 L 9.51 11.52 L 5.81 21.04 L 6.23 8.95 L 5.46 16.90"
      }
    ],
    [
      "circle",
      {
        "cx": "5.07",
        "cy": "13.07",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "11.52",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "5.81",
        "cy": "21.04",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.23",
        "cy": "8.95",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "5.46",
        "cy": "16.90",
        "r": "1.15"
      }
    ]
  ]
};

export const ZodiacoVendor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.07 13.07 L 9.51 11.52 L 5.81 21.04 L 6.23 8.95 L 5.46 16.90" />
      <circle cx="5.07" cy="13.07" r="1.37" />
      <circle cx="9.51" cy="11.52" r="0.62" />
      <circle cx="5.81" cy="21.04" r="0.93" />
      <circle cx="6.23" cy="8.95" r="0.95" />
      <circle cx="5.46" cy="16.90" r="1.15" />
      {children}
    </svg>
  );
});

export default ZodiacoVendor;
