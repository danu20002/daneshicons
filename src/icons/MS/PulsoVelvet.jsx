import React from 'react';

export const iconData = {
  "id": "PulsoVelvet",
  "name": "PulsoVelvet",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.18 9.70 L 11.15 2.79 L 17.45 18.28 L 20.23 15.11"
      }
    ],
    [
      "circle",
      {
        "cx": "12.18",
        "cy": "9.70",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "11.15",
        "cy": "2.79",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "17.45",
        "cy": "18.28",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "20.23",
        "cy": "15.11",
        "r": "1.23"
      }
    ]
  ]
};

export const PulsoVelvet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.18 9.70 L 11.15 2.79 L 17.45 18.28 L 20.23 15.11" />
      <circle cx="12.18" cy="9.70" r="1.37" />
      <circle cx="11.15" cy="2.79" r="1.21" />
      <circle cx="17.45" cy="18.28" r="0.54" />
      <circle cx="20.23" cy="15.11" r="1.23" />
      {children}
    </svg>
  );
});

export default PulsoVelvet;
