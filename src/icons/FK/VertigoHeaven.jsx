import React from 'react';

export const iconData = {
  "id": "VertigoHeaven",
  "name": "VertigoHeaven",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.82 18.89 L 20.48 14.77 L 15.48 7.34 L 8.00 10.31 L 7.08 5.43 L 5.06 12.69"
      }
    ],
    [
      "circle",
      {
        "cx": "15.82",
        "cy": "18.89",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "20.48",
        "cy": "14.77",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "15.48",
        "cy": "7.34",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "10.31",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "7.08",
        "cy": "5.43",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "5.06",
        "cy": "12.69",
        "r": "0.99"
      }
    ]
  ]
};

export const VertigoHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.82 18.89 L 20.48 14.77 L 15.48 7.34 L 8.00 10.31 L 7.08 5.43 L 5.06 12.69" />
      <circle cx="15.82" cy="18.89" r="0.94" />
      <circle cx="20.48" cy="14.77" r="1.20" />
      <circle cx="15.48" cy="7.34" r="1.13" />
      <circle cx="8.00" cy="10.31" r="1.07" />
      <circle cx="7.08" cy="5.43" r="0.68" />
      <circle cx="5.06" cy="12.69" r="0.99" />
      {children}
    </svg>
  );
});

export default VertigoHeaven;
