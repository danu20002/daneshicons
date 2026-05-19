import React from 'react';

export const iconData = {
  "id": "PomoShoulder",
  "name": "PomoShoulder",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.54 18.95 L 3.21 13.33 L 15.25 3.73 Z"
      }
    ]
  ]
};

export const PomoShoulder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.54 18.95 L 3.21 13.33 L 15.25 3.73 Z" />
      {children}
    </svg>
  );
});

export default PomoShoulder;
