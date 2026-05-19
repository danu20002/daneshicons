import React from 'react';

export const iconData = {
  "id": "MarmoFinite",
  "name": "MarmoFinite",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.87 19.09 L 4.18 18.04 L 10.61 17.58 L 5.12 20.39"
      }
    ],
    [
      "circle",
      {
        "cx": "15.87",
        "cy": "19.09",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "4.18",
        "cy": "18.04",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "10.61",
        "cy": "17.58",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "5.12",
        "cy": "20.39",
        "r": "1.41"
      }
    ]
  ]
};

export const MarmoFinite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.87 19.09 L 4.18 18.04 L 10.61 17.58 L 5.12 20.39" />
      <circle cx="15.87" cy="19.09" r="0.84" />
      <circle cx="4.18" cy="18.04" r="1.09" />
      <circle cx="10.61" cy="17.58" r="1.22" />
      <circle cx="5.12" cy="20.39" r="1.41" />
      {children}
    </svg>
  );
});

export default MarmoFinite;
