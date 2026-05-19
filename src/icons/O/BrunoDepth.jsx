import React from 'react';

export const iconData = {
  "id": "BrunoDepth",
  "name": "BrunoDepth",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.74 20.11 L 2.20 16.27 L 17.16 19.97 L 3.15 4.51"
      }
    ],
    [
      "circle",
      {
        "cx": "5.74",
        "cy": "20.11",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "2.20",
        "cy": "16.27",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "17.16",
        "cy": "19.97",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "3.15",
        "cy": "4.51",
        "r": "1.47"
      }
    ]
  ]
};

export const BrunoDepth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.74 20.11 L 2.20 16.27 L 17.16 19.97 L 3.15 4.51" />
      <circle cx="5.74" cy="20.11" r="1.05" />
      <circle cx="2.20" cy="16.27" r="0.65" />
      <circle cx="17.16" cy="19.97" r="1.15" />
      <circle cx="3.15" cy="4.51" r="1.47" />
      {children}
    </svg>
  );
});

export default BrunoDepth;
