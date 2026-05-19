import React from 'react';

export const iconData = {
  "id": "RupoGondola",
  "name": "RupoGondola",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.63 2.04 L 13.67 8.87 L 21.05 7.62 L 15.49 12.63 L 18.96 19.25 L 12.48 15.52 L 7.26 20.86 L 8.81 13.55 L 2.10 10.23 L 9.54 9.44 Z"
      }
    ]
  ]
};

export const RupoGondola = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.63 2.04 L 13.67 8.87 L 21.05 7.62 L 15.49 12.63 L 18.96 19.25 L 12.48 15.52 L 7.26 20.86 L 8.81 13.55 L 2.10 10.23 L 9.54 9.44 Z" />
      {children}
    </svg>
  );
});

export default RupoGondola;
