import React from 'react';

export const iconData = {
  "id": "SomaTruly",
  "name": "SomaTruly",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.73 19.44 L 6.70 19.75 L 2.99 9.35 L 11.73 2.61 L 20.85 8.85 Z"
      }
    ]
  ]
};

export const SomaTruly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.73 19.44 L 6.70 19.75 L 2.99 9.35 L 11.73 2.61 L 20.85 8.85 Z" />
      {children}
    </svg>
  );
});

export default SomaTruly;
