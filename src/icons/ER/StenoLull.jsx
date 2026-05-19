import React from 'react';

export const iconData = {
  "id": "StenoLull",
  "name": "StenoLull",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.74 12.89 L 5.73 21.72 L 20.32 5.22 L 2.26 16.29"
      }
    ],
    [
      "circle",
      {
        "cx": "17.74",
        "cy": "12.89",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "5.73",
        "cy": "21.72",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "20.32",
        "cy": "5.22",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "2.26",
        "cy": "16.29",
        "r": "1.26"
      }
    ]
  ]
};

export const StenoLull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.74 12.89 L 5.73 21.72 L 20.32 5.22 L 2.26 16.29" />
      <circle cx="17.74" cy="12.89" r="1.32" />
      <circle cx="5.73" cy="21.72" r="1.43" />
      <circle cx="20.32" cy="5.22" r="1.42" />
      <circle cx="2.26" cy="16.29" r="1.26" />
      {children}
    </svg>
  );
});

export default StenoLull;
