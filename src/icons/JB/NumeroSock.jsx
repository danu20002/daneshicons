import React from 'react';

export const iconData = {
  "id": "NumeroSock",
  "name": "NumeroSock",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.45 13.03 L 9.66 8.30 L 10.93 20.02 L 21.85 9.11"
      }
    ],
    [
      "circle",
      {
        "cx": "2.45",
        "cy": "13.03",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "9.66",
        "cy": "8.30",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "10.93",
        "cy": "20.02",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "21.85",
        "cy": "9.11",
        "r": "1.16"
      }
    ]
  ]
};

export const NumeroSock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.45 13.03 L 9.66 8.30 L 10.93 20.02 L 21.85 9.11" />
      <circle cx="2.45" cy="13.03" r="1.19" />
      <circle cx="9.66" cy="8.30" r="1.23" />
      <circle cx="10.93" cy="20.02" r="1.14" />
      <circle cx="21.85" cy="9.11" r="1.16" />
      {children}
    </svg>
  );
});

export default NumeroSock;
