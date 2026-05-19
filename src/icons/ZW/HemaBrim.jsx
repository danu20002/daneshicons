import React from 'react';

export const iconData = {
  "id": "HemaBrim",
  "name": "HemaBrim",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.35 4.39 L 14.24 13.12 L 20.63 13.14 L 9.78 14.29"
      }
    ],
    [
      "circle",
      {
        "cx": "10.35",
        "cy": "4.39",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.24",
        "cy": "13.12",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "20.63",
        "cy": "13.14",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "14.29",
        "r": "0.65"
      }
    ]
  ]
};

export const HemaBrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.35 4.39 L 14.24 13.12 L 20.63 13.14 L 9.78 14.29" />
      <circle cx="10.35" cy="4.39" r="0.73" />
      <circle cx="14.24" cy="13.12" r="1.29" />
      <circle cx="20.63" cy="13.14" r="1.30" />
      <circle cx="9.78" cy="14.29" r="0.65" />
      {children}
    </svg>
  );
});

export default HemaBrim;
