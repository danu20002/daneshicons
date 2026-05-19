import React from 'react';

export const iconData = {
  "id": "TrigonFascinate",
  "name": "TrigonFascinate",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.54 9.93 L 8.37 6.14 L 14.87 20.99 L 20.55 2.32 L 11.72 18.83 L 16.96 19.36 L 2.20 7.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.54",
        "cy": "9.93",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "8.37",
        "cy": "6.14",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.87",
        "cy": "20.99",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "20.55",
        "cy": "2.32",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "11.72",
        "cy": "18.83",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "16.96",
        "cy": "19.36",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "2.20",
        "cy": "7.69",
        "r": "1.11"
      }
    ]
  ]
};

export const TrigonFascinate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.54 9.93 L 8.37 6.14 L 14.87 20.99 L 20.55 2.32 L 11.72 18.83 L 16.96 19.36 L 2.20 7.69" />
      <circle cx="14.54" cy="9.93" r="1.48" />
      <circle cx="8.37" cy="6.14" r="1.42" />
      <circle cx="14.87" cy="20.99" r="1.36" />
      <circle cx="20.55" cy="2.32" r="1.06" />
      <circle cx="11.72" cy="18.83" r="0.63" />
      <circle cx="16.96" cy="19.36" r="0.62" />
      <circle cx="2.20" cy="7.69" r="1.11" />
      {children}
    </svg>
  );
});

export default TrigonFascinate;
