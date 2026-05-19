import React from 'react';

export const iconData = {
  "id": "FronoPoem",
  "name": "FronoPoem",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.18 12.18 L 4.78 16.14 L 17.13 18.19 L 14.83 15.16 L 10.85 12.20 L 14.30 9.96 L 2.58 13.35"
      }
    ],
    [
      "circle",
      {
        "cx": "16.18",
        "cy": "12.18",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "4.78",
        "cy": "16.14",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "17.13",
        "cy": "18.19",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "14.83",
        "cy": "15.16",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "10.85",
        "cy": "12.20",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.30",
        "cy": "9.96",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "2.58",
        "cy": "13.35",
        "r": "1.05"
      }
    ]
  ]
};

export const FronoPoem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.18 12.18 L 4.78 16.14 L 17.13 18.19 L 14.83 15.16 L 10.85 12.20 L 14.30 9.96 L 2.58 13.35" />
      <circle cx="16.18" cy="12.18" r="0.73" />
      <circle cx="4.78" cy="16.14" r="1.50" />
      <circle cx="17.13" cy="18.19" r="1.15" />
      <circle cx="14.83" cy="15.16" r="1.06" />
      <circle cx="10.85" cy="12.20" r="1.35" />
      <circle cx="14.30" cy="9.96" r="1.30" />
      <circle cx="2.58" cy="13.35" r="1.05" />
      {children}
    </svg>
  );
});

export default FronoPoem;
