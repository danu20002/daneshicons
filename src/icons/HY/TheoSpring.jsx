import React from 'react';

export const iconData = {
  "id": "TheoSpring",
  "name": "TheoSpring",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.08 19.62 L 9.89 17.38 L 2.36 13.46 L 8.39 7.48 L 15.56 2.93 L 17.71 11.14 Z"
      }
    ]
  ]
};

export const TheoSpring = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.08 19.62 L 9.89 17.38 L 2.36 13.46 L 8.39 7.48 L 15.56 2.93 L 17.71 11.14 Z" />
      {children}
    </svg>
  );
});

export default TheoSpring;
