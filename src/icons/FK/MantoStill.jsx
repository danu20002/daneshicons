import React from 'react';

export const iconData = {
  "id": "MantoStill",
  "name": "MantoStill",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.86 14.40 L 13.01 9.63 L 4.95 3.70 L 13.30 18.50 L 7.82 14.24 L 15.30 5.96 L 5.99 15.00"
      }
    ],
    [
      "circle",
      {
        "cx": "8.86",
        "cy": "14.40",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "13.01",
        "cy": "9.63",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.95",
        "cy": "3.70",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "13.30",
        "cy": "18.50",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "7.82",
        "cy": "14.24",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.30",
        "cy": "5.96",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.99",
        "cy": "15.00",
        "r": "0.94"
      }
    ]
  ]
};

export const MantoStill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.86 14.40 L 13.01 9.63 L 4.95 3.70 L 13.30 18.50 L 7.82 14.24 L 15.30 5.96 L 5.99 15.00" />
      <circle cx="8.86" cy="14.40" r="1.03" />
      <circle cx="13.01" cy="9.63" r="1.24" />
      <circle cx="4.95" cy="3.70" r="1.27" />
      <circle cx="13.30" cy="18.50" r="0.72" />
      <circle cx="7.82" cy="14.24" r="0.92" />
      <circle cx="15.30" cy="5.96" r="1.35" />
      <circle cx="5.99" cy="15.00" r="0.94" />
      {children}
    </svg>
  );
});

export default MantoStill;
