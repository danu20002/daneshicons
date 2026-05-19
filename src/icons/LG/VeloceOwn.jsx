import React from 'react';

export const iconData = {
  "id": "VeloceOwn",
  "name": "VeloceOwn",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.44 15.94 L 8.68 4.45 L 9.90 10.94 L 18.06 10.50 L 12.36 5.32 L 17.22 10.85"
      }
    ],
    [
      "circle",
      {
        "cx": "8.44",
        "cy": "15.94",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "8.68",
        "cy": "4.45",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "9.90",
        "cy": "10.94",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.06",
        "cy": "10.50",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "12.36",
        "cy": "5.32",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "17.22",
        "cy": "10.85",
        "r": "0.81"
      }
    ]
  ]
};

export const VeloceOwn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.44 15.94 L 8.68 4.45 L 9.90 10.94 L 18.06 10.50 L 12.36 5.32 L 17.22 10.85" />
      <circle cx="8.44" cy="15.94" r="0.86" />
      <circle cx="8.68" cy="4.45" r="0.71" />
      <circle cx="9.90" cy="10.94" r="0.80" />
      <circle cx="18.06" cy="10.50" r="1.25" />
      <circle cx="12.36" cy="5.32" r="1.47" />
      <circle cx="17.22" cy="10.85" r="0.81" />
      {children}
    </svg>
  );
});

export default VeloceOwn;
