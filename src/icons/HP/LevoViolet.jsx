import React from 'react';

export const iconData = {
  "id": "LevoViolet",
  "name": "LevoViolet",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.41 19.63 L 21.15 8.74 L 21.30 3.40 L 7.28 5.12 L 6.62 20.11"
      }
    ],
    [
      "circle",
      {
        "cx": "13.41",
        "cy": "19.63",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "8.74",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "21.30",
        "cy": "3.40",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "7.28",
        "cy": "5.12",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "6.62",
        "cy": "20.11",
        "r": "1.28"
      }
    ]
  ]
};

export const LevoViolet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.41 19.63 L 21.15 8.74 L 21.30 3.40 L 7.28 5.12 L 6.62 20.11" />
      <circle cx="13.41" cy="19.63" r="0.73" />
      <circle cx="21.15" cy="8.74" r="0.99" />
      <circle cx="21.30" cy="3.40" r="1.33" />
      <circle cx="7.28" cy="5.12" r="0.84" />
      <circle cx="6.62" cy="20.11" r="1.28" />
      {children}
    </svg>
  );
});

export default LevoViolet;
