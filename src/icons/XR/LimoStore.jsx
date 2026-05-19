import React from 'react';

export const iconData = {
  "id": "LimoStore",
  "name": "LimoStore",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.54 8.33 L 14.48 11.31 L 14.93 6.02 L 11.62 2.38"
      }
    ],
    [
      "circle",
      {
        "cx": "11.54",
        "cy": "8.33",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "14.48",
        "cy": "11.31",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "14.93",
        "cy": "6.02",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "11.62",
        "cy": "2.38",
        "r": "1.14"
      }
    ]
  ]
};

export const LimoStore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.54 8.33 L 14.48 11.31 L 14.93 6.02 L 11.62 2.38" />
      <circle cx="11.54" cy="8.33" r="0.52" />
      <circle cx="14.48" cy="11.31" r="0.59" />
      <circle cx="14.93" cy="6.02" r="0.56" />
      <circle cx="11.62" cy="2.38" r="1.14" />
      {children}
    </svg>
  );
});

export default LimoStore;
