import React from 'react';

export const iconData = {
  "id": "UmidoNice",
  "name": "UmidoNice",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.68 11.71 L 15.20 18.66 L 5.83 19.04 L 9.93 2.67 L 17.26 7.19 L 9.61 10.32 L 6.68 21.80"
      }
    ],
    [
      "circle",
      {
        "cx": "14.68",
        "cy": "11.71",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.66",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "19.04",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "9.93",
        "cy": "2.67",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "17.26",
        "cy": "7.19",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "9.61",
        "cy": "10.32",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "6.68",
        "cy": "21.80",
        "r": "1.26"
      }
    ]
  ]
};

export const UmidoNice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.68 11.71 L 15.20 18.66 L 5.83 19.04 L 9.93 2.67 L 17.26 7.19 L 9.61 10.32 L 6.68 21.80" />
      <circle cx="14.68" cy="11.71" r="1.33" />
      <circle cx="15.20" cy="18.66" r="0.83" />
      <circle cx="5.83" cy="19.04" r="1.00" />
      <circle cx="9.93" cy="2.67" r="0.53" />
      <circle cx="17.26" cy="7.19" r="0.57" />
      <circle cx="9.61" cy="10.32" r="1.32" />
      <circle cx="6.68" cy="21.80" r="1.26" />
      {children}
    </svg>
  );
});

export default UmidoNice;
