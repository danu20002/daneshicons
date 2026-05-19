import React from 'react';

export const iconData = {
  "id": "OmniPlay",
  "name": "OmniPlay",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 18.60 L 17.92 19.65 L 15.24 6.87 L 11.19 4.15 L 18.83 21.14 L 19.55 9.31 L 6.38 6.44"
      }
    ],
    [
      "circle",
      {
        "cx": "8.70",
        "cy": "18.60",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "17.92",
        "cy": "19.65",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "15.24",
        "cy": "6.87",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "11.19",
        "cy": "4.15",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.83",
        "cy": "21.14",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "19.55",
        "cy": "9.31",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "6.38",
        "cy": "6.44",
        "r": "1.28"
      }
    ]
  ]
};

export const OmniPlay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 18.60 L 17.92 19.65 L 15.24 6.87 L 11.19 4.15 L 18.83 21.14 L 19.55 9.31 L 6.38 6.44" />
      <circle cx="8.70" cy="18.60" r="0.82" />
      <circle cx="17.92" cy="19.65" r="0.57" />
      <circle cx="15.24" cy="6.87" r="0.64" />
      <circle cx="11.19" cy="4.15" r="0.92" />
      <circle cx="18.83" cy="21.14" r="1.21" />
      <circle cx="19.55" cy="9.31" r="0.77" />
      <circle cx="6.38" cy="6.44" r="1.28" />
      {children}
    </svg>
  );
});

export default OmniPlay;
