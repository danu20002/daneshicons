import React from 'react';

export const iconData = {
  "id": "TandemVague",
  "name": "TandemVague",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.49 5.87 A 3.94 4.04 98 0 0 5.84 7.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 17.99 A 4.45 4.55 52 0 0 6.67 4.78"
      }
    ]
  ]
};

export const TandemVague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.49 5.87 A 3.94 4.04 98 0 0 5.84 7.70" />
      <path d="M 7.92 17.99 A 4.45 4.55 52 0 0 6.67 4.78" />
      {children}
    </svg>
  );
});

export default TandemVague;
