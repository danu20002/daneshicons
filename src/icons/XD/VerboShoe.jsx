import React from 'react';

export const iconData = {
  "id": "VerboShoe",
  "name": "VerboShoe",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.12 20.19 L 3.81 8.12 L 15.88 3.81 L 20.19 15.88 Z"
      }
    ]
  ]
};

export const VerboShoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.12 20.19 L 3.81 8.12 L 15.88 3.81 L 20.19 15.88 Z" />
      {children}
    </svg>
  );
});

export default VerboShoe;
