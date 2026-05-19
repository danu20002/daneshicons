import React from 'react';

export const iconData = {
  "id": "TumidoJelly",
  "name": "TumidoJelly",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.64 5.89 L 13.52 17.44 L 15.81 18.34 L 17.53 8.66 L 19.41 20.15 L 8.17 3.65 L 12.00 10.21"
      }
    ],
    [
      "circle",
      {
        "cx": "10.64",
        "cy": "5.89",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "13.52",
        "cy": "17.44",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "15.81",
        "cy": "18.34",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "17.53",
        "cy": "8.66",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "19.41",
        "cy": "20.15",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "8.17",
        "cy": "3.65",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "10.21",
        "r": "1.31"
      }
    ]
  ]
};

export const TumidoJelly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.64 5.89 L 13.52 17.44 L 15.81 18.34 L 17.53 8.66 L 19.41 20.15 L 8.17 3.65 L 12.00 10.21" />
      <circle cx="10.64" cy="5.89" r="1.42" />
      <circle cx="13.52" cy="17.44" r="0.60" />
      <circle cx="15.81" cy="18.34" r="1.07" />
      <circle cx="17.53" cy="8.66" r="0.92" />
      <circle cx="19.41" cy="20.15" r="0.95" />
      <circle cx="8.17" cy="3.65" r="0.97" />
      <circle cx="12.00" cy="10.21" r="1.31" />
      {children}
    </svg>
  );
});

export default TumidoJelly;
