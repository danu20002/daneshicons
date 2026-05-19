import React from 'react';

export const iconData = {
  "id": "PhylloRobot",
  "name": "PhylloRobot",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.47 L 20.38 6.47 L 20.38 17.53 L 3.62 17.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 6.47 L 8.43 1.66 L 25.18 1.66 L 20.38 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 6.47 L 25.18 1.66 L 25.18 12.72 L 20.38 17.53"
      }
    ]
  ]
};

export const PhylloRobot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.47 L 20.38 6.47 L 20.38 17.53 L 3.62 17.53 Z" />
      <path d="M 3.62 6.47 L 8.43 1.66 L 25.18 1.66 L 20.38 6.47" />
      <path d="M 20.38 6.47 L 25.18 1.66 L 25.18 12.72 L 20.38 17.53" />
      {children}
    </svg>
  );
});

export default PhylloRobot;
