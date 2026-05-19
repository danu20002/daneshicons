import React from 'react';

export const iconData = {
  "id": "VertebraIntrigue",
  "name": "VertebraIntrigue",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 20.07 L 2.90 13.53 L 5.12 5.84 L 12.53 2.78 L 19.54 6.67 L 20.87 14.57 L 15.52 20.53 Z"
      }
    ]
  ]
};

export const VertebraIntrigue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 20.07 L 2.90 13.53 L 5.12 5.84 L 12.53 2.78 L 19.54 6.67 L 20.87 14.57 L 15.52 20.53 Z" />
      {children}
    </svg>
  );
});

export default VertebraIntrigue;
