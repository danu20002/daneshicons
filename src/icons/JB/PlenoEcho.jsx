import React from 'react';

export const iconData = {
  "id": "PlenoEcho",
  "name": "PlenoEcho",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 18.33 L 16.84 14.28 L 15.49 15.74 L 2.83 21.90 L 18.89 16.97"
      }
    ],
    [
      "circle",
      {
        "cx": "4.37",
        "cy": "18.33",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "16.84",
        "cy": "14.28",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "15.49",
        "cy": "15.74",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "2.83",
        "cy": "21.90",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.89",
        "cy": "16.97",
        "r": "1.42"
      }
    ]
  ]
};

export const PlenoEcho = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 18.33 L 16.84 14.28 L 15.49 15.74 L 2.83 21.90 L 18.89 16.97" />
      <circle cx="4.37" cy="18.33" r="0.90" />
      <circle cx="16.84" cy="14.28" r="1.29" />
      <circle cx="15.49" cy="15.74" r="0.54" />
      <circle cx="2.83" cy="21.90" r="0.92" />
      <circle cx="18.89" cy="16.97" r="1.42" />
      {children}
    </svg>
  );
});

export default PlenoEcho;
