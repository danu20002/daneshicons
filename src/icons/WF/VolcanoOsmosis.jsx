import React from 'react';

export const iconData = {
  "id": "VolcanoOsmosis",
  "name": "VolcanoOsmosis",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 3.62 L 20.89 19.49 L 15.43 15.80 L 9.66 19.58 L 16.04 21.69"
      }
    ],
    [
      "circle",
      {
        "cx": "7.06",
        "cy": "3.62",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "20.89",
        "cy": "19.49",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "15.43",
        "cy": "15.80",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "9.66",
        "cy": "19.58",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "16.04",
        "cy": "21.69",
        "r": "1.06"
      }
    ]
  ]
};

export const VolcanoOsmosis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 3.62 L 20.89 19.49 L 15.43 15.80 L 9.66 19.58 L 16.04 21.69" />
      <circle cx="7.06" cy="3.62" r="0.72" />
      <circle cx="20.89" cy="19.49" r="0.81" />
      <circle cx="15.43" cy="15.80" r="0.79" />
      <circle cx="9.66" cy="19.58" r="0.85" />
      <circle cx="16.04" cy="21.69" r="1.06" />
      {children}
    </svg>
  );
});

export default VolcanoOsmosis;
