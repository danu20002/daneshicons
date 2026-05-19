import React from 'react';

export const iconData = {
  "id": "ZodiacoGirder",
  "name": "ZodiacoGirder",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 18.80 L 7.93 3.24 L 4.14 9.10 L 11.70 12.26"
      }
    ],
    [
      "circle",
      {
        "cx": "2.06",
        "cy": "18.80",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "7.93",
        "cy": "3.24",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "4.14",
        "cy": "9.10",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "11.70",
        "cy": "12.26",
        "r": "0.93"
      }
    ]
  ]
};

export const ZodiacoGirder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 18.80 L 7.93 3.24 L 4.14 9.10 L 11.70 12.26" />
      <circle cx="2.06" cy="18.80" r="0.84" />
      <circle cx="7.93" cy="3.24" r="1.28" />
      <circle cx="4.14" cy="9.10" r="0.94" />
      <circle cx="11.70" cy="12.26" r="0.93" />
      {children}
    </svg>
  );
});

export default ZodiacoGirder;
