import React from 'react';

export const iconData = {
  "id": "QualiTeeth",
  "name": "QualiTeeth",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 14.83 L 4.17 9.12 L 7.85 4.76 L 13.48 3.79 L 18.41 6.66 L 20.34 12.03 L 18.37 17.39 L 13.42 20.22 L 7.80 19.21 Z"
      }
    ]
  ]
};

export const QualiTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 14.83 L 4.17 9.12 L 7.85 4.76 L 13.48 3.79 L 18.41 6.66 L 20.34 12.03 L 18.37 17.39 L 13.42 20.22 L 7.80 19.21 Z" />
      {children}
    </svg>
  );
});

export default QualiTeeth;
