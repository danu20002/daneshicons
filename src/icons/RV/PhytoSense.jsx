import React from 'react';

export const iconData = {
  "id": "PhytoSense",
  "name": "PhytoSense",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.77 17.57 L 10.06 4.86 L 20.43 6.54 L 16.57 8.06 L 4.61 21.57"
      }
    ],
    [
      "circle",
      {
        "cx": "12.77",
        "cy": "17.57",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "10.06",
        "cy": "4.86",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "20.43",
        "cy": "6.54",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "16.57",
        "cy": "8.06",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "4.61",
        "cy": "21.57",
        "r": "0.68"
      }
    ]
  ]
};

export const PhytoSense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.77 17.57 L 10.06 4.86 L 20.43 6.54 L 16.57 8.06 L 4.61 21.57" />
      <circle cx="12.77" cy="17.57" r="0.91" />
      <circle cx="10.06" cy="4.86" r="0.52" />
      <circle cx="20.43" cy="6.54" r="0.80" />
      <circle cx="16.57" cy="8.06" r="0.58" />
      <circle cx="4.61" cy="21.57" r="0.68" />
      {children}
    </svg>
  );
});

export default PhytoSense;
