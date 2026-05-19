import React from 'react';

export const iconData = {
  "id": "LabyrinthoCrust",
  "name": "LabyrinthoCrust",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.57 5.59 L 16.54 14.17 L 11.17 15.03 L 20.81 4.70 L 5.68 11.37 L 6.07 20.93 L 5.57 14.36 L 5.49 19.83"
      }
    ],
    [
      "circle",
      {
        "cx": "18.57",
        "cy": "5.59",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "16.54",
        "cy": "14.17",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "11.17",
        "cy": "15.03",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "20.81",
        "cy": "4.70",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "5.68",
        "cy": "11.37",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "6.07",
        "cy": "20.93",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "5.57",
        "cy": "14.36",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "5.49",
        "cy": "19.83",
        "r": "0.74"
      }
    ]
  ]
};

export const LabyrinthoCrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.57 5.59 L 16.54 14.17 L 11.17 15.03 L 20.81 4.70 L 5.68 11.37 L 6.07 20.93 L 5.57 14.36 L 5.49 19.83" />
      <circle cx="18.57" cy="5.59" r="0.60" />
      <circle cx="16.54" cy="14.17" r="1.37" />
      <circle cx="11.17" cy="15.03" r="0.57" />
      <circle cx="20.81" cy="4.70" r="0.87" />
      <circle cx="5.68" cy="11.37" r="1.18" />
      <circle cx="6.07" cy="20.93" r="1.17" />
      <circle cx="5.57" cy="14.36" r="0.76" />
      <circle cx="5.49" cy="19.83" r="0.74" />
      {children}
    </svg>
  );
});

export default LabyrinthoCrust;
