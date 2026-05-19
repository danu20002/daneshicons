import React from 'react';

export const iconData = {
  "id": "VistaSeries",
  "name": "VistaSeries",
  "category": "JA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.01 14.09 L 15.29 11.86"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 14.09 L 5.60 13.86"
      }
    ],
    [
      "path",
      {
        "d": "M 15.29 11.86 L 4.79 17.50"
      }
    ],
    [
      "circle",
      {
        "cx": "15.01",
        "cy": "14.09",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.29",
        "cy": "11.86",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "13.86",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.79",
        "cy": "17.50",
        "r": "1.5"
      }
    ]
  ]
};

export const VistaSeries = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.01 14.09 L 15.29 11.86" />
      <path d="M 15.01 14.09 L 5.60 13.86" />
      <path d="M 15.29 11.86 L 4.79 17.50" />
      <circle cx="15.01" cy="14.09" r="1.5" />
      <circle cx="15.29" cy="11.86" r="1.5" />
      <circle cx="5.60" cy="13.86" r="1.5" />
      <circle cx="4.79" cy="17.50" r="1.5" />
      {children}
    </svg>
  );
});

export default VistaSeries;
