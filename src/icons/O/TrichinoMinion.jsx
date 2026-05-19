import React from 'react';

export const iconData = {
  "id": "TrichinoMinion",
  "name": "TrichinoMinion",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.25 16.87 L 15.41 19.32 L 7.93 21.04 L 2.00 19.72 L 15.27 18.37"
      }
    ],
    [
      "circle",
      {
        "cx": "20.25",
        "cy": "16.87",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "15.41",
        "cy": "19.32",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "7.93",
        "cy": "21.04",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "2.00",
        "cy": "19.72",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "15.27",
        "cy": "18.37",
        "r": "1.02"
      }
    ]
  ]
};

export const TrichinoMinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.25 16.87 L 15.41 19.32 L 7.93 21.04 L 2.00 19.72 L 15.27 18.37" />
      <circle cx="20.25" cy="16.87" r="1.44" />
      <circle cx="15.41" cy="19.32" r="1.34" />
      <circle cx="7.93" cy="21.04" r="0.92" />
      <circle cx="2.00" cy="19.72" r="0.79" />
      <circle cx="15.27" cy="18.37" r="1.02" />
      {children}
    </svg>
  );
});

export default TrichinoMinion;
