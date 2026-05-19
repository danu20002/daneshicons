import React from 'react';

export const iconData = {
  "id": "TraumaSpecific",
  "name": "TraumaSpecific",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.26 8.45 L 18.08 14.11 L 20.94 8.27 L 19.47 18.35 L 5.19 19.25 L 6.83 17.26"
      }
    ],
    [
      "circle",
      {
        "cx": "13.26",
        "cy": "8.45",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "18.08",
        "cy": "14.11",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "20.94",
        "cy": "8.27",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "19.47",
        "cy": "18.35",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "5.19",
        "cy": "19.25",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.83",
        "cy": "17.26",
        "r": "1.29"
      }
    ]
  ]
};

export const TraumaSpecific = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.26 8.45 L 18.08 14.11 L 20.94 8.27 L 19.47 18.35 L 5.19 19.25 L 6.83 17.26" />
      <circle cx="13.26" cy="8.45" r="0.72" />
      <circle cx="18.08" cy="14.11" r="0.55" />
      <circle cx="20.94" cy="8.27" r="0.94" />
      <circle cx="19.47" cy="18.35" r="0.84" />
      <circle cx="5.19" cy="19.25" r="1.46" />
      <circle cx="6.83" cy="17.26" r="1.29" />
      {children}
    </svg>
  );
});

export default TraumaSpecific;
