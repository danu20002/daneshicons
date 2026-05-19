import React from 'react';

export const iconData = {
  "id": "RenoTrinket",
  "name": "RenoTrinket",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 20.09 L 11.61 3.86 L 13.10 6.00 L 20.10 10.83 L 2.05 15.67 L 15.50 13.12"
      }
    ],
    [
      "circle",
      {
        "cx": "9.59",
        "cy": "20.09",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "11.61",
        "cy": "3.86",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "13.10",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "20.10",
        "cy": "10.83",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "2.05",
        "cy": "15.67",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "15.50",
        "cy": "13.12",
        "r": "0.95"
      }
    ]
  ]
};

export const RenoTrinket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 20.09 L 11.61 3.86 L 13.10 6.00 L 20.10 10.83 L 2.05 15.67 L 15.50 13.12" />
      <circle cx="9.59" cy="20.09" r="0.84" />
      <circle cx="11.61" cy="3.86" r="0.96" />
      <circle cx="13.10" cy="6.00" r="0.80" />
      <circle cx="20.10" cy="10.83" r="1.21" />
      <circle cx="2.05" cy="15.67" r="1.38" />
      <circle cx="15.50" cy="13.12" r="0.95" />
      {children}
    </svg>
  );
});

export default RenoTrinket;
