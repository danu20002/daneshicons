import React from 'react';

export const iconData = {
  "id": "ToccoCave",
  "name": "ToccoCave",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.42 21.69 L 20.28 10.79 L 10.20 12.06 L 3.73 9.72"
      }
    ],
    [
      "circle",
      {
        "cx": "19.42",
        "cy": "21.69",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "20.28",
        "cy": "10.79",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.20",
        "cy": "12.06",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "3.73",
        "cy": "9.72",
        "r": "0.81"
      }
    ]
  ]
};

export const ToccoCave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.42 21.69 L 20.28 10.79 L 10.20 12.06 L 3.73 9.72" />
      <circle cx="19.42" cy="21.69" r="1.41" />
      <circle cx="20.28" cy="10.79" r="1.43" />
      <circle cx="10.20" cy="12.06" r="1.17" />
      <circle cx="3.73" cy="9.72" r="0.81" />
      {children}
    </svg>
  );
});

export default ToccoCave;
