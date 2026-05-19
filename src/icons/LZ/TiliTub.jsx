import React from 'react';

export const iconData = {
  "id": "TiliTub",
  "name": "TiliTub",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.78 14.04 L 21.00 21.94 L 8.71 12.20 L 19.91 8.70 L 18.36 5.45"
      }
    ],
    [
      "circle",
      {
        "cx": "19.78",
        "cy": "14.04",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "21.00",
        "cy": "21.94",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "8.71",
        "cy": "12.20",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "19.91",
        "cy": "8.70",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.36",
        "cy": "5.45",
        "r": "1.15"
      }
    ]
  ]
};

export const TiliTub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.78 14.04 L 21.00 21.94 L 8.71 12.20 L 19.91 8.70 L 18.36 5.45" />
      <circle cx="19.78" cy="14.04" r="1.43" />
      <circle cx="21.00" cy="21.94" r="1.06" />
      <circle cx="8.71" cy="12.20" r="1.48" />
      <circle cx="19.91" cy="8.70" r="0.73" />
      <circle cx="18.36" cy="5.45" r="1.15" />
      {children}
    </svg>
  );
});

export default TiliTub;
