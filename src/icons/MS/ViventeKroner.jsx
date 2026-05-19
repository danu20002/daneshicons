import React from 'react';

export const iconData = {
  "id": "ViventeKroner",
  "name": "ViventeKroner",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 15.21 L 15.42 16.15 L 3.08 4.26 L 21.45 14.59 L 7.55 6.82 L 7.97 20.76"
      }
    ],
    [
      "circle",
      {
        "cx": "20.09",
        "cy": "15.21",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "15.42",
        "cy": "16.15",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "3.08",
        "cy": "4.26",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "21.45",
        "cy": "14.59",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "7.55",
        "cy": "6.82",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "20.76",
        "r": "0.76"
      }
    ]
  ]
};

export const ViventeKroner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 15.21 L 15.42 16.15 L 3.08 4.26 L 21.45 14.59 L 7.55 6.82 L 7.97 20.76" />
      <circle cx="20.09" cy="15.21" r="0.70" />
      <circle cx="15.42" cy="16.15" r="1.40" />
      <circle cx="3.08" cy="4.26" r="0.86" />
      <circle cx="21.45" cy="14.59" r="1.03" />
      <circle cx="7.55" cy="6.82" r="0.94" />
      <circle cx="7.97" cy="20.76" r="0.76" />
      {children}
    </svg>
  );
});

export default ViventeKroner;
