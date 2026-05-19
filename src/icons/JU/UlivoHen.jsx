import React from 'react';

export const iconData = {
  "id": "UlivoHen",
  "name": "UlivoHen",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.13 14.78 L 20.86 9.87 L 6.22 21.89 L 18.67 18.11 L 8.87 4.09 L 4.62 19.43 L 7.67 15.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.13",
        "cy": "14.78",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "20.86",
        "cy": "9.87",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "6.22",
        "cy": "21.89",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "18.11",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "8.87",
        "cy": "4.09",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "4.62",
        "cy": "19.43",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "7.67",
        "cy": "15.46",
        "r": "1.23"
      }
    ]
  ]
};

export const UlivoHen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.13 14.78 L 20.86 9.87 L 6.22 21.89 L 18.67 18.11 L 8.87 4.09 L 4.62 19.43 L 7.67 15.46" />
      <circle cx="12.13" cy="14.78" r="1.24" />
      <circle cx="20.86" cy="9.87" r="1.34" />
      <circle cx="6.22" cy="21.89" r="0.62" />
      <circle cx="18.67" cy="18.11" r="0.88" />
      <circle cx="8.87" cy="4.09" r="0.73" />
      <circle cx="4.62" cy="19.43" r="1.21" />
      <circle cx="7.67" cy="15.46" r="1.23" />
      {children}
    </svg>
  );
});

export default UlivoHen;
