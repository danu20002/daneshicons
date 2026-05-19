import React from 'react';

export const iconData = {
  "id": "VescicaPerish",
  "name": "VescicaPerish",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.83 10.16 L 16.34 11.06 L 2.38 10.58 L 14.53 20.84 L 21.11 3.43 L 6.34 6.52"
      }
    ],
    [
      "circle",
      {
        "cx": "21.83",
        "cy": "10.16",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "16.34",
        "cy": "11.06",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "2.38",
        "cy": "10.58",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.53",
        "cy": "20.84",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "21.11",
        "cy": "3.43",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "6.34",
        "cy": "6.52",
        "r": "1.14"
      }
    ]
  ]
};

export const VescicaPerish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.83 10.16 L 16.34 11.06 L 2.38 10.58 L 14.53 20.84 L 21.11 3.43 L 6.34 6.52" />
      <circle cx="21.83" cy="10.16" r="1.08" />
      <circle cx="16.34" cy="11.06" r="0.92" />
      <circle cx="2.38" cy="10.58" r="1.35" />
      <circle cx="14.53" cy="20.84" r="0.84" />
      <circle cx="21.11" cy="3.43" r="0.72" />
      <circle cx="6.34" cy="6.52" r="1.14" />
      {children}
    </svg>
  );
});

export default VescicaPerish;
