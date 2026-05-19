import React from 'react';

export const iconData = {
  "id": "HeteroRiver",
  "name": "HeteroRiver",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.63 13.96 L 13.34 4.76 L 6.75 18.84 L 21.00 9.41"
      }
    ],
    [
      "circle",
      {
        "cx": "5.63",
        "cy": "13.96",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "13.34",
        "cy": "4.76",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "6.75",
        "cy": "18.84",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "21.00",
        "cy": "9.41",
        "r": "1.33"
      }
    ]
  ]
};

export const HeteroRiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.63 13.96 L 13.34 4.76 L 6.75 18.84 L 21.00 9.41" />
      <circle cx="5.63" cy="13.96" r="1.35" />
      <circle cx="13.34" cy="4.76" r="1.23" />
      <circle cx="6.75" cy="18.84" r="1.23" />
      <circle cx="21.00" cy="9.41" r="1.33" />
      {children}
    </svg>
  );
});

export default HeteroRiver;
