import React from 'react';

export const iconData = {
  "id": "RefleBristle",
  "name": "RefleBristle",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.97 20.22 L 7.60 15.79 L 15.66 14.12 L 13.71 15.25 L 4.63 6.86 L 13.48 16.31"
      }
    ],
    [
      "circle",
      {
        "cx": "5.97",
        "cy": "20.22",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "7.60",
        "cy": "15.79",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "15.66",
        "cy": "14.12",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.71",
        "cy": "15.25",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "4.63",
        "cy": "6.86",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "13.48",
        "cy": "16.31",
        "r": "1.17"
      }
    ]
  ]
};

export const RefleBristle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.97 20.22 L 7.60 15.79 L 15.66 14.12 L 13.71 15.25 L 4.63 6.86 L 13.48 16.31" />
      <circle cx="5.97" cy="20.22" r="0.66" />
      <circle cx="7.60" cy="15.79" r="1.36" />
      <circle cx="15.66" cy="14.12" r="1.46" />
      <circle cx="13.71" cy="15.25" r="1.26" />
      <circle cx="4.63" cy="6.86" r="0.95" />
      <circle cx="13.48" cy="16.31" r="1.17" />
      {children}
    </svg>
  );
});

export default RefleBristle;
