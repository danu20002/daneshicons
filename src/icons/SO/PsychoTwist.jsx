import React from 'react';

export const iconData = {
  "id": "PsychoTwist",
  "name": "PsychoTwist",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.09 8.14 L 7.19 7.18 L 15.24 3.46 L 7.54 9.21 L 6.76 7.77"
      }
    ],
    [
      "circle",
      {
        "cx": "6.09",
        "cy": "8.14",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "7.19",
        "cy": "7.18",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "15.24",
        "cy": "3.46",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "7.54",
        "cy": "9.21",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "6.76",
        "cy": "7.77",
        "r": "1.30"
      }
    ]
  ]
};

export const PsychoTwist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.09 8.14 L 7.19 7.18 L 15.24 3.46 L 7.54 9.21 L 6.76 7.77" />
      <circle cx="6.09" cy="8.14" r="1.00" />
      <circle cx="7.19" cy="7.18" r="1.19" />
      <circle cx="15.24" cy="3.46" r="1.18" />
      <circle cx="7.54" cy="9.21" r="1.11" />
      <circle cx="6.76" cy="7.77" r="1.30" />
      {children}
    </svg>
  );
});

export default PsychoTwist;
