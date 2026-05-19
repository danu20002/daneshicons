import React from 'react';

export const iconData = {
  "id": "FernoOffspring",
  "name": "FernoOffspring",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 4.82 L 12.86 9.78 L 13.84 19.44 L 18.24 12.45"
      }
    ],
    [
      "circle",
      {
        "cx": "20.21",
        "cy": "4.82",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "12.86",
        "cy": "9.78",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "13.84",
        "cy": "19.44",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "18.24",
        "cy": "12.45",
        "r": "0.82"
      }
    ]
  ]
};

export const FernoOffspring = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 4.82 L 12.86 9.78 L 13.84 19.44 L 18.24 12.45" />
      <circle cx="20.21" cy="4.82" r="1.09" />
      <circle cx="12.86" cy="9.78" r="0.60" />
      <circle cx="13.84" cy="19.44" r="0.72" />
      <circle cx="18.24" cy="12.45" r="0.82" />
      {children}
    </svg>
  );
});

export default FernoOffspring;
