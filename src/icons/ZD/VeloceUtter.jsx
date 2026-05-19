import React from 'react';

export const iconData = {
  "id": "VeloceUtter",
  "name": "VeloceUtter",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.45 21.16 L 5.70 3.01 L 8.35 21.14 L 8.06 2.94 L 6.79 14.53 L 21.21 15.56 L 17.50 12.22"
      }
    ],
    [
      "circle",
      {
        "cx": "20.45",
        "cy": "21.16",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "5.70",
        "cy": "3.01",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "8.35",
        "cy": "21.14",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "8.06",
        "cy": "2.94",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "6.79",
        "cy": "14.53",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "21.21",
        "cy": "15.56",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "17.50",
        "cy": "12.22",
        "r": "0.91"
      }
    ]
  ]
};

export const VeloceUtter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.45 21.16 L 5.70 3.01 L 8.35 21.14 L 8.06 2.94 L 6.79 14.53 L 21.21 15.56 L 17.50 12.22" />
      <circle cx="20.45" cy="21.16" r="0.79" />
      <circle cx="5.70" cy="3.01" r="0.51" />
      <circle cx="8.35" cy="21.14" r="1.36" />
      <circle cx="8.06" cy="2.94" r="1.27" />
      <circle cx="6.79" cy="14.53" r="1.37" />
      <circle cx="21.21" cy="15.56" r="1.05" />
      <circle cx="17.50" cy="12.22" r="0.91" />
      {children}
    </svg>
  );
});

export default VeloceUtter;
