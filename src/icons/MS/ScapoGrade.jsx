import React from 'react';

export const iconData = {
  "id": "ScapoGrade",
  "name": "ScapoGrade",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.21 11.59 L 21.03 4.70 L 6.06 7.41 L 4.78 12.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.21",
        "cy": "11.59",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "21.03",
        "cy": "4.70",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "6.06",
        "cy": "7.41",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "4.78",
        "cy": "12.61",
        "r": "0.61"
      }
    ]
  ]
};

export const ScapoGrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.21 11.59 L 21.03 4.70 L 6.06 7.41 L 4.78 12.61" />
      <circle cx="14.21" cy="11.59" r="1.19" />
      <circle cx="21.03" cy="4.70" r="1.25" />
      <circle cx="6.06" cy="7.41" r="0.82" />
      <circle cx="4.78" cy="12.61" r="0.61" />
      {children}
    </svg>
  );
});

export default ScapoGrade;
