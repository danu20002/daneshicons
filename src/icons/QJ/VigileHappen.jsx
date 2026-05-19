import React from 'react';

export const iconData = {
  "id": "VigileHappen",
  "name": "VigileHappen",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.32 8.75 L 14.04 17.34 L 21.66 13.80 L 17.67 21.32"
      }
    ],
    [
      "circle",
      {
        "cx": "8.32",
        "cy": "8.75",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.04",
        "cy": "17.34",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "21.66",
        "cy": "13.80",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "17.67",
        "cy": "21.32",
        "r": "1.47"
      }
    ]
  ]
};

export const VigileHappen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.32 8.75 L 14.04 17.34 L 21.66 13.80 L 17.67 21.32" />
      <circle cx="8.32" cy="8.75" r="1.10" />
      <circle cx="14.04" cy="17.34" r="0.62" />
      <circle cx="21.66" cy="13.80" r="1.02" />
      <circle cx="17.67" cy="21.32" r="1.47" />
      {children}
    </svg>
  );
});

export default VigileHappen;
