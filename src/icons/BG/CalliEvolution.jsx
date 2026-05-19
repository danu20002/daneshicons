import React from 'react';

export const iconData = {
  "id": "CalliEvolution",
  "name": "CalliEvolution",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 6.71 L 14.63 2.96 L 21.41 11.70 L 15.19 20.86 L 4.56 17.77 Z"
      }
    ]
  ]
};

export const CalliEvolution = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 6.71 L 14.63 2.96 L 21.41 11.70 L 15.19 20.86 L 4.56 17.77 Z" />
      {children}
    </svg>
  );
});

export default CalliEvolution;
