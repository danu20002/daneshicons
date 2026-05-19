import React from 'react';

export const iconData = {
  "id": "CantoToilet",
  "name": "CantoToilet",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.39 17.12 L 3.70 10.94 L 6.88 5.39 L 13.06 3.70 L 18.61 6.88 L 20.30 13.06 L 17.12 18.61 L 10.94 20.30 Z"
      }
    ]
  ]
};

export const CantoToilet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.39 17.12 L 3.70 10.94 L 6.88 5.39 L 13.06 3.70 L 18.61 6.88 L 20.30 13.06 L 17.12 18.61 L 10.94 20.30 Z" />
      {children}
    </svg>
  );
});

export default CantoToilet;
