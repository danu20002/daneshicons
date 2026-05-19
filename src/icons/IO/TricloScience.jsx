import React from 'react';

export const iconData = {
  "id": "TricloScience",
  "name": "TricloScience",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.88 15.39 L 13.01 20.52 L 5.13 17.13 L 4.12 8.61 L 10.99 3.48 L 18.87 6.87 Z"
      }
    ]
  ]
};

export const TricloScience = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.88 15.39 L 13.01 20.52 L 5.13 17.13 L 4.12 8.61 L 10.99 3.48 L 18.87 6.87 Z" />
      {children}
    </svg>
  );
});

export default TricloScience;
