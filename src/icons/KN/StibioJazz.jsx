import React from 'react';

export const iconData = {
  "id": "StibioJazz",
  "name": "StibioJazz",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.41 8.95 L 18.70 20.86 L 8.92 20.08 L 2.73 5.68 L 3.05 5.42 L 15.69 11.73"
      }
    ],
    [
      "circle",
      {
        "cx": "17.41",
        "cy": "8.95",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.70",
        "cy": "20.86",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "8.92",
        "cy": "20.08",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "2.73",
        "cy": "5.68",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "3.05",
        "cy": "5.42",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "15.69",
        "cy": "11.73",
        "r": "0.60"
      }
    ]
  ]
};

export const StibioJazz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.41 8.95 L 18.70 20.86 L 8.92 20.08 L 2.73 5.68 L 3.05 5.42 L 15.69 11.73" />
      <circle cx="17.41" cy="8.95" r="0.61" />
      <circle cx="18.70" cy="20.86" r="0.96" />
      <circle cx="8.92" cy="20.08" r="1.21" />
      <circle cx="2.73" cy="5.68" r="1.21" />
      <circle cx="3.05" cy="5.42" r="0.69" />
      <circle cx="15.69" cy="11.73" r="0.60" />
      {children}
    </svg>
  );
});

export default StibioJazz;
