import React from 'react';

export const iconData = {
  "id": "NebuloScarf",
  "name": "NebuloScarf",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.86 18.93 L 13.84 18.96 L 4.78 4.99 L 16.01 21.04 L 19.24 3.54 L 20.01 15.10"
      }
    ],
    [
      "circle",
      {
        "cx": "7.86",
        "cy": "18.93",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "13.84",
        "cy": "18.96",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "4.78",
        "cy": "4.99",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "16.01",
        "cy": "21.04",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "19.24",
        "cy": "3.54",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "20.01",
        "cy": "15.10",
        "r": "0.52"
      }
    ]
  ]
};

export const NebuloScarf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.86 18.93 L 13.84 18.96 L 4.78 4.99 L 16.01 21.04 L 19.24 3.54 L 20.01 15.10" />
      <circle cx="7.86" cy="18.93" r="1.50" />
      <circle cx="13.84" cy="18.96" r="0.51" />
      <circle cx="4.78" cy="4.99" r="1.09" />
      <circle cx="16.01" cy="21.04" r="1.11" />
      <circle cx="19.24" cy="3.54" r="1.21" />
      <circle cx="20.01" cy="15.10" r="0.52" />
      {children}
    </svg>
  );
});

export default NebuloScarf;
