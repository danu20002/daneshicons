import React from 'react';

export const iconData = {
  "id": "UrceoPrimary",
  "name": "UrceoPrimary",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 14.34 L 16.48 21.94 L 15.47 8.19 L 12.99 12.46 L 5.46 12.85 L 13.43 17.37 L 17.61 7.73 L 4.34 21.76"
      }
    ],
    [
      "circle",
      {
        "cx": "3.55",
        "cy": "14.34",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "16.48",
        "cy": "21.94",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "15.47",
        "cy": "8.19",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "12.99",
        "cy": "12.46",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "5.46",
        "cy": "12.85",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "13.43",
        "cy": "17.37",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "17.61",
        "cy": "7.73",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "4.34",
        "cy": "21.76",
        "r": "1.46"
      }
    ]
  ]
};

export const UrceoPrimary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 14.34 L 16.48 21.94 L 15.47 8.19 L 12.99 12.46 L 5.46 12.85 L 13.43 17.37 L 17.61 7.73 L 4.34 21.76" />
      <circle cx="3.55" cy="14.34" r="0.53" />
      <circle cx="16.48" cy="21.94" r="0.62" />
      <circle cx="15.47" cy="8.19" r="0.94" />
      <circle cx="12.99" cy="12.46" r="1.37" />
      <circle cx="5.46" cy="12.85" r="0.68" />
      <circle cx="13.43" cy="17.37" r="1.44" />
      <circle cx="17.61" cy="7.73" r="1.42" />
      <circle cx="4.34" cy="21.76" r="1.46" />
      {children}
    </svg>
  );
});

export default UrceoPrimary;
