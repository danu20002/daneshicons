import React from 'react';

export const iconData = {
  "id": "MembraEther",
  "name": "MembraEther",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 18.84 L 7.12 10.76 L 17.78 5.72 L 20.03 12.21"
      }
    ],
    [
      "circle",
      {
        "cx": "21.96",
        "cy": "18.84",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "7.12",
        "cy": "10.76",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "17.78",
        "cy": "5.72",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "20.03",
        "cy": "12.21",
        "r": "1.30"
      }
    ]
  ]
};

export const MembraEther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 18.84 L 7.12 10.76 L 17.78 5.72 L 20.03 12.21" />
      <circle cx="21.96" cy="18.84" r="1.36" />
      <circle cx="7.12" cy="10.76" r="1.23" />
      <circle cx="17.78" cy="5.72" r="0.89" />
      <circle cx="20.03" cy="12.21" r="1.30" />
      {children}
    </svg>
  );
});

export default MembraEther;
