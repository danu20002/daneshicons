import React from 'react';

export const iconData = {
  "id": "LigroMercury",
  "name": "LigroMercury",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.23 14.39 L 5.12 7.93 L 3.12 13.09 L 16.21 20.99"
      }
    ],
    [
      "circle",
      {
        "cx": "2.23",
        "cy": "14.39",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "5.12",
        "cy": "7.93",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "3.12",
        "cy": "13.09",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "16.21",
        "cy": "20.99",
        "r": "1.12"
      }
    ]
  ]
};

export const LigroMercury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.23 14.39 L 5.12 7.93 L 3.12 13.09 L 16.21 20.99" />
      <circle cx="2.23" cy="14.39" r="1.10" />
      <circle cx="5.12" cy="7.93" r="1.00" />
      <circle cx="3.12" cy="13.09" r="1.07" />
      <circle cx="16.21" cy="20.99" r="1.12" />
      {children}
    </svg>
  );
});

export default LigroMercury;
