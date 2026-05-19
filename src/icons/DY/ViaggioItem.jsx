import React from 'react';

export const iconData = {
  "id": "ViaggioItem",
  "name": "ViaggioItem",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.45 8.77 L 10.03 14.11 L 21.99 14.13 L 17.00 15.11 L 19.99 19.92 L 16.85 3.97"
      }
    ],
    [
      "circle",
      {
        "cx": "5.45",
        "cy": "8.77",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "10.03",
        "cy": "14.11",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "21.99",
        "cy": "14.13",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "17.00",
        "cy": "15.11",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "19.99",
        "cy": "19.92",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "16.85",
        "cy": "3.97",
        "r": "1.41"
      }
    ]
  ]
};

export const ViaggioItem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.45 8.77 L 10.03 14.11 L 21.99 14.13 L 17.00 15.11 L 19.99 19.92 L 16.85 3.97" />
      <circle cx="5.45" cy="8.77" r="0.90" />
      <circle cx="10.03" cy="14.11" r="1.33" />
      <circle cx="21.99" cy="14.13" r="0.81" />
      <circle cx="17.00" cy="15.11" r="0.67" />
      <circle cx="19.99" cy="19.92" r="0.73" />
      <circle cx="16.85" cy="3.97" r="1.41" />
      {children}
    </svg>
  );
});

export default ViaggioItem;
