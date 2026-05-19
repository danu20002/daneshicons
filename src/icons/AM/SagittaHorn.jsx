import React from 'react';

export const iconData = {
  "id": "SagittaHorn",
  "name": "SagittaHorn",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 14.37 L 14.10 3.62 L 18.21 18.01 Z"
      }
    ]
  ]
};

export const SagittaHorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 14.37 L 14.10 3.62 L 18.21 18.01 Z" />
      {children}
    </svg>
  );
});

export default SagittaHorn;
