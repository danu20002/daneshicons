import React from 'react';

export const iconData = {
  "id": "VerlenNecklace",
  "name": "VerlenNecklace",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.67 13.27 L 21.05 7.26 L 15.43 13.07 L 12.11 7.65"
      }
    ],
    [
      "circle",
      {
        "cx": "16.67",
        "cy": "13.27",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "21.05",
        "cy": "7.26",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "15.43",
        "cy": "13.07",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "12.11",
        "cy": "7.65",
        "r": "1.23"
      }
    ]
  ]
};

export const VerlenNecklace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.67 13.27 L 21.05 7.26 L 15.43 13.07 L 12.11 7.65" />
      <circle cx="16.67" cy="13.27" r="1.45" />
      <circle cx="21.05" cy="7.26" r="0.90" />
      <circle cx="15.43" cy="13.07" r="1.24" />
      <circle cx="12.11" cy="7.65" r="1.23" />
      {children}
    </svg>
  );
});

export default VerlenNecklace;
