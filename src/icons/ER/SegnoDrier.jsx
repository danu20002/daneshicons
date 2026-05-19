import React from 'react';

export const iconData = {
  "id": "SegnoDrier",
  "name": "SegnoDrier",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.65 14.69 L 4.99 11.45 L 18.57 20.75 L 7.17 9.90"
      }
    ],
    [
      "circle",
      {
        "cx": "20.65",
        "cy": "14.69",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "4.99",
        "cy": "11.45",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.57",
        "cy": "20.75",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "7.17",
        "cy": "9.90",
        "r": "1.20"
      }
    ]
  ]
};

export const SegnoDrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.65 14.69 L 4.99 11.45 L 18.57 20.75 L 7.17 9.90" />
      <circle cx="20.65" cy="14.69" r="0.85" />
      <circle cx="4.99" cy="11.45" r="1.48" />
      <circle cx="18.57" cy="20.75" r="1.48" />
      <circle cx="7.17" cy="9.90" r="1.20" />
      {children}
    </svg>
  );
});

export default SegnoDrier;
