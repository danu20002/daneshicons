import React from 'react';

export const iconData = {
  "id": "TurbinoPenalty",
  "name": "TurbinoPenalty",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.50 17.76 L 6.66 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 14.50 17.76 L 16.32 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 19.86 L 16.32 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 5.73 L 5.90 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 4.73 L 5.90 14.75"
      }
    ],
    [
      "circle",
      {
        "cx": "14.50",
        "cy": "17.76",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.66",
        "cy": "19.86",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.32",
        "cy": "5.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "4.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.90",
        "cy": "14.75",
        "r": "1.5"
      }
    ]
  ]
};

export const TurbinoPenalty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.50 17.76 L 6.66 19.86" />
      <path d="M 14.50 17.76 L 16.32 5.73" />
      <path d="M 6.66 19.86 L 16.32 5.73" />
      <path d="M 16.32 5.73 L 5.90 14.75" />
      <path d="M 6.00 4.73 L 5.90 14.75" />
      <circle cx="14.50" cy="17.76" r="1.5" />
      <circle cx="6.66" cy="19.86" r="1.5" />
      <circle cx="16.32" cy="5.73" r="1.5" />
      <circle cx="6.00" cy="4.73" r="1.5" />
      <circle cx="5.90" cy="14.75" r="1.5" />
      {children}
    </svg>
  );
});

export default TurbinoPenalty;
