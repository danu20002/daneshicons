import React from 'react';

export const iconData = {
  "id": "CoeloScythe",
  "name": "CoeloScythe",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 12.92 L 9.29 10.79 L 6.17 3.91 L 8.78 8.26"
      }
    ],
    [
      "circle",
      {
        "cx": "20.09",
        "cy": "12.92",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "9.29",
        "cy": "10.79",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "6.17",
        "cy": "3.91",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "8.78",
        "cy": "8.26",
        "r": "1.22"
      }
    ]
  ]
};

export const CoeloScythe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 12.92 L 9.29 10.79 L 6.17 3.91 L 8.78 8.26" />
      <circle cx="20.09" cy="12.92" r="1.14" />
      <circle cx="9.29" cy="10.79" r="1.41" />
      <circle cx="6.17" cy="3.91" r="1.22" />
      <circle cx="8.78" cy="8.26" r="1.22" />
      {children}
    </svg>
  );
});

export default CoeloScythe;
