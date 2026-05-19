import React from 'react';

export const iconData = {
  "id": "VitreoIndoor",
  "name": "VitreoIndoor",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.45 18.05 L 9.99 20.61 L 3.54 14.56 L 5.55 5.95 L 14.01 3.39 L 20.46 9.44 Z"
      }
    ]
  ]
};

export const VitreoIndoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.45 18.05 L 9.99 20.61 L 3.54 14.56 L 5.55 5.95 L 14.01 3.39 L 20.46 9.44 Z" />
      {children}
    </svg>
  );
});

export default VitreoIndoor;
