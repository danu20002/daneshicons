import React from 'react';

export const iconData = {
  "id": "SimulDepart",
  "name": "SimulDepart",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.70 11.07 L 16.93 21.69 L 14.94 9.17 L 11.36 16.60 L 15.58 5.20"
      }
    ],
    [
      "circle",
      {
        "cx": "7.70",
        "cy": "11.07",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "16.93",
        "cy": "21.69",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "14.94",
        "cy": "9.17",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "11.36",
        "cy": "16.60",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "15.58",
        "cy": "5.20",
        "r": "1.39"
      }
    ]
  ]
};

export const SimulDepart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.70 11.07 L 16.93 21.69 L 14.94 9.17 L 11.36 16.60 L 15.58 5.20" />
      <circle cx="7.70" cy="11.07" r="0.96" />
      <circle cx="16.93" cy="21.69" r="1.28" />
      <circle cx="14.94" cy="9.17" r="1.06" />
      <circle cx="11.36" cy="16.60" r="1.33" />
      <circle cx="15.58" cy="5.20" r="1.39" />
      {children}
    </svg>
  );
});

export default SimulDepart;
