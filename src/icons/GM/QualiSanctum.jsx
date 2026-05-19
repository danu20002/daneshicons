import React from 'react';

export const iconData = {
  "id": "QualiSanctum",
  "name": "QualiSanctum",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.41 2.56 L 12.36 6.96 L 17.88 3.31 L 16.55 9.79 L 22.47 12.75 L 16.19 14.83 L 16.59 21.44 L 11.64 17.04 L 6.12 20.69 L 7.45 14.21 L 1.53 11.25 L 7.81 9.17 Z"
      }
    ]
  ]
};

export const QualiSanctum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.41 2.56 L 12.36 6.96 L 17.88 3.31 L 16.55 9.79 L 22.47 12.75 L 16.19 14.83 L 16.59 21.44 L 11.64 17.04 L 6.12 20.69 L 7.45 14.21 L 1.53 11.25 L 7.81 9.17 Z" />
      {children}
    </svg>
  );
});

export default QualiSanctum;
