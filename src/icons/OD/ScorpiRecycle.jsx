import React from 'react';

export const iconData = {
  "id": "ScorpiRecycle",
  "name": "ScorpiRecycle",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.50 14.77 L 6.85 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 14.77 L 7.57 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 18.05 L 7.57 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 18.05 L 3.99 10.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 18.05 L 3.69 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 10.22 L 3.69 17.67"
      }
    ],
    [
      "circle",
      {
        "cx": "5.50",
        "cy": "14.77",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.85",
        "cy": "18.05",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.57",
        "cy": "16.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.99",
        "cy": "10.22",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.69",
        "cy": "17.67",
        "r": "1.5"
      }
    ]
  ]
};

export const ScorpiRecycle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.50 14.77 L 6.85 18.05" />
      <path d="M 5.50 14.77 L 7.57 16.46" />
      <path d="M 6.85 18.05 L 7.57 16.46" />
      <path d="M 6.85 18.05 L 3.99 10.22" />
      <path d="M 6.85 18.05 L 3.69 17.67" />
      <path d="M 3.99 10.22 L 3.69 17.67" />
      <circle cx="5.50" cy="14.77" r="1.5" />
      <circle cx="6.85" cy="18.05" r="1.5" />
      <circle cx="7.57" cy="16.46" r="1.5" />
      <circle cx="3.99" cy="10.22" r="1.5" />
      <circle cx="3.69" cy="17.67" r="1.5" />
      {children}
    </svg>
  );
});

export default ScorpiRecycle;
