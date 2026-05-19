import React from 'react';

export const iconData = {
  "id": "MonoFact",
  "name": "MonoFact",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.88 2.95 L 11.63 6.47 L 15.88 2.35 L 16.10 8.26 L 21.97 9.02 L 17.48 12.87 L 20.54 17.93 L 14.73 16.83 L 12.69 22.38 L 9.93 17.15 L 4.31 19.01 L 6.69 13.59 L 1.73 10.36 L 7.44 8.84 Z"
      }
    ]
  ]
};

export const MonoFact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.88 2.95 L 11.63 6.47 L 15.88 2.35 L 16.10 8.26 L 21.97 9.02 L 17.48 12.87 L 20.54 17.93 L 14.73 16.83 L 12.69 22.38 L 9.93 17.15 L 4.31 19.01 L 6.69 13.59 L 1.73 10.36 L 7.44 8.84 Z" />
      {children}
    </svg>
  );
});

export default MonoFact;
