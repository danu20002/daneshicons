import React from 'react';

export const iconData = {
  "id": "LuteoLoop",
  "name": "LuteoLoop",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.11 14.18 L 9.28 9.38 L 14.55 16.13 L 13.07 9.41 L 3.96 5.17 L 12.76 2.22"
      }
    ],
    [
      "circle",
      {
        "cx": "9.11",
        "cy": "14.18",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "9.28",
        "cy": "9.38",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "14.55",
        "cy": "16.13",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "13.07",
        "cy": "9.41",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "3.96",
        "cy": "5.17",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "12.76",
        "cy": "2.22",
        "r": "1.13"
      }
    ]
  ]
};

export const LuteoLoop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.11 14.18 L 9.28 9.38 L 14.55 16.13 L 13.07 9.41 L 3.96 5.17 L 12.76 2.22" />
      <circle cx="9.11" cy="14.18" r="0.74" />
      <circle cx="9.28" cy="9.38" r="0.74" />
      <circle cx="14.55" cy="16.13" r="0.96" />
      <circle cx="13.07" cy="9.41" r="0.65" />
      <circle cx="3.96" cy="5.17" r="1.10" />
      <circle cx="12.76" cy="2.22" r="1.13" />
      {children}
    </svg>
  );
});

export default LuteoLoop;
