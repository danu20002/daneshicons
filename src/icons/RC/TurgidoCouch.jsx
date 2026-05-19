import React from 'react';

export const iconData = {
  "id": "TurgidoCouch",
  "name": "TurgidoCouch",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 6.23 L 12.35 20.83 L 15.13 2.97 L 21.11 5.41 L 16.44 16.38 L 20.63 12.74"
      }
    ],
    [
      "circle",
      {
        "cx": "4.53",
        "cy": "6.23",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "12.35",
        "cy": "20.83",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.13",
        "cy": "2.97",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "21.11",
        "cy": "5.41",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "16.44",
        "cy": "16.38",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "20.63",
        "cy": "12.74",
        "r": "1.33"
      }
    ]
  ]
};

export const TurgidoCouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 6.23 L 12.35 20.83 L 15.13 2.97 L 21.11 5.41 L 16.44 16.38 L 20.63 12.74" />
      <circle cx="4.53" cy="6.23" r="0.95" />
      <circle cx="12.35" cy="20.83" r="0.92" />
      <circle cx="15.13" cy="2.97" r="0.95" />
      <circle cx="21.11" cy="5.41" r="1.39" />
      <circle cx="16.44" cy="16.38" r="1.08" />
      <circle cx="20.63" cy="12.74" r="1.33" />
      {children}
    </svg>
  );
});

export default TurgidoCouch;
