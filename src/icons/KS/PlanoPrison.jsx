import React from 'react';

export const iconData = {
  "id": "PlanoPrison",
  "name": "PlanoPrison",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.83 12.39 L 17.97 18.52 L 11.61 20.83 L 5.48 17.97 L 3.17 11.61 L 6.03 5.48 L 12.39 3.17 L 18.52 6.03 Z"
      }
    ]
  ]
};

export const PlanoPrison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.83 12.39 L 17.97 18.52 L 11.61 20.83 L 5.48 17.97 L 3.17 11.61 L 6.03 5.48 L 12.39 3.17 L 18.52 6.03 Z" />
      {children}
    </svg>
  );
});

export default PlanoPrison;
