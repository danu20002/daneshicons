import React from 'react';

export const iconData = {
  "id": "TrocleaRoam",
  "name": "TrocleaRoam",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.39 17.50 L 6.06 8.41 L 7.29 21.41 L 3.67 6.05 L 6.43 8.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.39",
        "cy": "17.50",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "6.06",
        "cy": "8.41",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "7.29",
        "cy": "21.41",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "3.67",
        "cy": "6.05",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.43",
        "cy": "8.38",
        "r": "0.68"
      }
    ]
  ]
};

export const TrocleaRoam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.39 17.50 L 6.06 8.41 L 7.29 21.41 L 3.67 6.05 L 6.43 8.38" />
      <circle cx="17.39" cy="17.50" r="0.67" />
      <circle cx="6.06" cy="8.41" r="1.49" />
      <circle cx="7.29" cy="21.41" r="1.14" />
      <circle cx="3.67" cy="6.05" r="1.38" />
      <circle cx="6.43" cy="8.38" r="0.68" />
      {children}
    </svg>
  );
});

export default TrocleaRoam;
