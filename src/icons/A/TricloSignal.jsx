import React from 'react';

export const iconData = {
  "id": "TricloSignal",
  "name": "TricloSignal",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.16 18.55 L 3.65 7.52 L 13.68 2.68 L 21.39 10.72 L 16.12 20.53 Z"
      }
    ]
  ]
};

export const TricloSignal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.16 18.55 L 3.65 7.52 L 13.68 2.68 L 21.39 10.72 L 16.12 20.53 Z" />
      {children}
    </svg>
  );
});

export default TricloSignal;
