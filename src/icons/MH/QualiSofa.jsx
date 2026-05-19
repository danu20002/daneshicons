import React from 'react';

export const iconData = {
  "id": "QualiSofa",
  "name": "QualiSofa",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.83 1.72 L 14.37 9.46 L 21.98 7.44 L 15.47 11.88 L 22.28 15.83 L 14.54 14.37 L 16.56 21.98 L 12.12 15.47 L 8.17 22.28 L 9.63 14.54 L 2.02 16.56 L 8.53 12.12 L 1.72 8.17 L 9.46 9.63 L 7.44 2.02 L 11.88 8.53 Z"
      }
    ]
  ]
};

export const QualiSofa = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.83 1.72 L 14.37 9.46 L 21.98 7.44 L 15.47 11.88 L 22.28 15.83 L 14.54 14.37 L 16.56 21.98 L 12.12 15.47 L 8.17 22.28 L 9.63 14.54 L 2.02 16.56 L 8.53 12.12 L 1.72 8.17 L 9.46 9.63 L 7.44 2.02 L 11.88 8.53 Z" />
      {children}
    </svg>
  );
});

export default QualiSofa;
