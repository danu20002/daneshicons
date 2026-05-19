import React from 'react';

export const iconData = {
  "id": "RevolMow",
  "name": "RevolMow",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.70 8.46 L 20.17 3.87 L 8.44 18.85 L 2.13 10.54 L 6.00 6.45 L 6.52 21.38"
      }
    ],
    [
      "circle",
      {
        "cx": "20.70",
        "cy": "8.46",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "20.17",
        "cy": "3.87",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "8.44",
        "cy": "18.85",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "2.13",
        "cy": "10.54",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.45",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "6.52",
        "cy": "21.38",
        "r": "1.22"
      }
    ]
  ]
};

export const RevolMow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.70 8.46 L 20.17 3.87 L 8.44 18.85 L 2.13 10.54 L 6.00 6.45 L 6.52 21.38" />
      <circle cx="20.70" cy="8.46" r="0.88" />
      <circle cx="20.17" cy="3.87" r="1.22" />
      <circle cx="8.44" cy="18.85" r="0.86" />
      <circle cx="2.13" cy="10.54" r="1.15" />
      <circle cx="6.00" cy="6.45" r="1.07" />
      <circle cx="6.52" cy="21.38" r="1.22" />
      {children}
    </svg>
  );
});

export default RevolMow;
