import React from 'react';

export const iconData = {
  "id": "MobiloSin",
  "name": "MobiloSin",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.70 4.20 L 16.45 14.24 L 22.00 11.76 L 5.77 20.90 L 8.77 5.39 L 14.42 7.94"
      }
    ],
    [
      "circle",
      {
        "cx": "6.70",
        "cy": "4.20",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "16.45",
        "cy": "14.24",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "22.00",
        "cy": "11.76",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.77",
        "cy": "20.90",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "8.77",
        "cy": "5.39",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.42",
        "cy": "7.94",
        "r": "1.24"
      }
    ]
  ]
};

export const MobiloSin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.70 4.20 L 16.45 14.24 L 22.00 11.76 L 5.77 20.90 L 8.77 5.39 L 14.42 7.94" />
      <circle cx="6.70" cy="4.20" r="0.68" />
      <circle cx="16.45" cy="14.24" r="0.91" />
      <circle cx="22.00" cy="11.76" r="1.35" />
      <circle cx="5.77" cy="20.90" r="1.44" />
      <circle cx="8.77" cy="5.39" r="0.81" />
      <circle cx="14.42" cy="7.94" r="1.24" />
      {children}
    </svg>
  );
});

export default MobiloSin;
