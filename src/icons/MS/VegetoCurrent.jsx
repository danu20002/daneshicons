import React from 'react';

export const iconData = {
  "id": "VegetoCurrent",
  "name": "VegetoCurrent",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.63 7.76 L 6.22 15.99 L 2.85 13.82 L 12.28 2.14"
      }
    ],
    [
      "circle",
      {
        "cx": "11.63",
        "cy": "7.76",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "6.22",
        "cy": "15.99",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "2.85",
        "cy": "13.82",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "12.28",
        "cy": "2.14",
        "r": "0.94"
      }
    ]
  ]
};

export const VegetoCurrent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.63 7.76 L 6.22 15.99 L 2.85 13.82 L 12.28 2.14" />
      <circle cx="11.63" cy="7.76" r="1.01" />
      <circle cx="6.22" cy="15.99" r="1.08" />
      <circle cx="2.85" cy="13.82" r="1.18" />
      <circle cx="12.28" cy="2.14" r="0.94" />
      {children}
    </svg>
  );
});

export default VegetoCurrent;
