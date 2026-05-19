import React from 'react';

export const iconData = {
  "id": "QualiNickel",
  "name": "QualiNickel",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 15.30 L 15.47 16.27 L 13.46 21.12 L 10.03 17.15 L 4.83 17.83 L 6.56 12.87 L 3.37 8.70 L 8.53 7.73 L 10.54 2.88 L 13.97 6.85 L 19.17 6.17 L 17.44 11.13 Z"
      }
    ]
  ]
};

export const QualiNickel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 15.30 L 15.47 16.27 L 13.46 21.12 L 10.03 17.15 L 4.83 17.83 L 6.56 12.87 L 3.37 8.70 L 8.53 7.73 L 10.54 2.88 L 13.97 6.85 L 19.17 6.17 L 17.44 11.13 Z" />
      {children}
    </svg>
  );
});

export default QualiNickel;
