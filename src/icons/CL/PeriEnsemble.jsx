import React from 'react';

export const iconData = {
  "id": "PeriEnsemble",
  "name": "PeriEnsemble",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.62 15.48 L 13.11 14.20"
      }
    ],
    [
      "circle",
      {
        "cx": "15.62",
        "cy": "15.48",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.11",
        "cy": "14.20",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.54",
        "cy": "8.36",
        "r": "1.5"
      }
    ]
  ]
};

export const PeriEnsemble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.62 15.48 L 13.11 14.20" />
      <circle cx="15.62" cy="15.48" r="1.5" />
      <circle cx="13.11" cy="14.20" r="1.5" />
      <circle cx="17.54" cy="8.36" r="1.5" />
      {children}
    </svg>
  );
});

export default PeriEnsemble;
