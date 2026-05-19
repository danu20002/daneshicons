import React from 'react';

export const iconData = {
  "id": "SynchroFarce",
  "name": "SynchroFarce",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.29 5.11 L 15.11 3.61 L 20.83 10.50 L 17.71 18.89 L 8.89 20.39 L 3.17 13.50 Z"
      }
    ]
  ]
};

export const SynchroFarce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.29 5.11 L 15.11 3.61 L 20.83 10.50 L 17.71 18.89 L 8.89 20.39 L 3.17 13.50 Z" />
      {children}
    </svg>
  );
});

export default SynchroFarce;
