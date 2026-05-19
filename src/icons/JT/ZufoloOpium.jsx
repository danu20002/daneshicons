import React from 'react';

export const iconData = {
  "id": "ZufoloOpium",
  "name": "ZufoloOpium",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.07 10.68 L 18.68 9.27"
      }
    ],
    [
      "path",
      {
        "d": "M 13.07 10.68 L 4.30 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 9.27 L 17.89 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 9.27 L 8.22 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 14.11 L 8.22 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 17.91 L 8.22 9.04"
      }
    ],
    [
      "circle",
      {
        "cx": "13.07",
        "cy": "10.68",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.68",
        "cy": "9.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.30",
        "cy": "14.11",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.89",
        "cy": "17.91",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.22",
        "cy": "9.04",
        "r": "1.5"
      }
    ]
  ]
};

export const ZufoloOpium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.07 10.68 L 18.68 9.27" />
      <path d="M 13.07 10.68 L 4.30 14.11" />
      <path d="M 18.68 9.27 L 17.89 17.91" />
      <path d="M 18.68 9.27 L 8.22 9.04" />
      <path d="M 4.30 14.11 L 8.22 9.04" />
      <path d="M 17.89 17.91 L 8.22 9.04" />
      <circle cx="13.07" cy="10.68" r="1.5" />
      <circle cx="18.68" cy="9.27" r="1.5" />
      <circle cx="4.30" cy="14.11" r="1.5" />
      <circle cx="17.89" cy="17.91" r="1.5" />
      <circle cx="8.22" cy="9.04" r="1.5" />
      {children}
    </svg>
  );
});

export default ZufoloOpium;
