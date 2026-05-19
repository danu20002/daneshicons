import React from 'react';

export const iconData = {
  "id": "SummoSchedule",
  "name": "SummoSchedule",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 6.04 L 20.19 6.04 L 20.19 17.96 L 3.81 17.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 6.04 L 8.66 1.19 L 25.04 1.19 L 20.19 6.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 6.04 L 25.04 1.19 L 25.04 13.11 L 20.19 17.96"
      }
    ]
  ]
};

export const SummoSchedule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 6.04 L 20.19 6.04 L 20.19 17.96 L 3.81 17.96 Z" />
      <path d="M 3.81 6.04 L 8.66 1.19 L 25.04 1.19 L 20.19 6.04" />
      <path d="M 20.19 6.04 L 25.04 1.19 L 25.04 13.11 L 20.19 17.96" />
      {children}
    </svg>
  );
});

export default SummoSchedule;
