import React from 'react';

export const iconData = {
  "id": "SaphoBeast",
  "name": "SaphoBeast",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.50 16.43 L 18.07 13.17 L 15.30 5.26 L 20.22 21.69 L 9.06 5.17"
      }
    ],
    [
      "circle",
      {
        "cx": "16.50",
        "cy": "16.43",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.07",
        "cy": "13.17",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "15.30",
        "cy": "5.26",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "20.22",
        "cy": "21.69",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "9.06",
        "cy": "5.17",
        "r": "0.80"
      }
    ]
  ]
};

export const SaphoBeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.50 16.43 L 18.07 13.17 L 15.30 5.26 L 20.22 21.69 L 9.06 5.17" />
      <circle cx="16.50" cy="16.43" r="0.87" />
      <circle cx="18.07" cy="13.17" r="0.78" />
      <circle cx="15.30" cy="5.26" r="1.33" />
      <circle cx="20.22" cy="21.69" r="1.26" />
      <circle cx="9.06" cy="5.17" r="0.80" />
      {children}
    </svg>
  );
});

export default SaphoBeast;
