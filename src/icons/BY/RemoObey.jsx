import React from 'react';

export const iconData = {
  "id": "RemoObey",
  "name": "RemoObey",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 15.20 L 5.18 6.59 L 13.27 3.39 L 20.10 8.80 L 18.82 17.41 L 10.73 20.61 Z"
      }
    ]
  ]
};

export const RemoObey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 15.20 L 5.18 6.59 L 13.27 3.39 L 20.10 8.80 L 18.82 17.41 L 10.73 20.61 Z" />
      {children}
    </svg>
  );
});

export default RemoObey;
