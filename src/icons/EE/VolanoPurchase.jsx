import React from 'react';

export const iconData = {
  "id": "VolanoPurchase",
  "name": "VolanoPurchase",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.42 10.64 L 10.33 2.47 L 20.55 7.47 L 18.95 18.73 L 7.75 20.69 Z"
      }
    ]
  ]
};

export const VolanoPurchase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.42 10.64 L 10.33 2.47 L 20.55 7.47 L 18.95 18.73 L 7.75 20.69 Z" />
      {children}
    </svg>
  );
});

export default VolanoPurchase;
