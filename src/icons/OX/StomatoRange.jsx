import React from 'react';

export const iconData = {
  "id": "StomatoRange",
  "name": "StomatoRange",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.30 10.48 L 3.99 20.90 L 12.70 10.48 L 3.54 18.74 L 21.20 20.30 L 11.24 3.48"
      }
    ],
    [
      "circle",
      {
        "cx": "13.30",
        "cy": "10.48",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "3.99",
        "cy": "20.90",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "12.70",
        "cy": "10.48",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "3.54",
        "cy": "18.74",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "21.20",
        "cy": "20.30",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "11.24",
        "cy": "3.48",
        "r": "1.24"
      }
    ]
  ]
};

export const StomatoRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.30 10.48 L 3.99 20.90 L 12.70 10.48 L 3.54 18.74 L 21.20 20.30 L 11.24 3.48" />
      <circle cx="13.30" cy="10.48" r="1.49" />
      <circle cx="3.99" cy="20.90" r="1.01" />
      <circle cx="12.70" cy="10.48" r="0.91" />
      <circle cx="3.54" cy="18.74" r="1.36" />
      <circle cx="21.20" cy="20.30" r="1.00" />
      <circle cx="11.24" cy="3.48" r="1.24" />
      {children}
    </svg>
  );
});

export default StomatoRange;
