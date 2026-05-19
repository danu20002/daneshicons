import React from 'react';

export const iconData = {
  "id": "PotoSignal",
  "name": "PotoSignal",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.75 17.86 L 6.14 18.75 L 5.25 6.14 L 17.86 5.25 Z"
      }
    ]
  ]
};

export const PotoSignal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.75 17.86 L 6.14 18.75 L 5.25 6.14 L 17.86 5.25 Z" />
      {children}
    </svg>
  );
});

export default PotoSignal;
