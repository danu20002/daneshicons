import React from 'react';

export const iconData = {
  "id": "TelluroLaser",
  "name": "TelluroLaser",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.39 18.53 L 10.04 21.66 L 2.65 15.13 L 4.61 5.47 L 13.96 2.34 L 21.35 8.87 Z"
      }
    ]
  ]
};

export const TelluroLaser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.39 18.53 L 10.04 21.66 L 2.65 15.13 L 4.61 5.47 L 13.96 2.34 L 21.35 8.87 Z" />
      {children}
    </svg>
  );
});

export default TelluroLaser;
