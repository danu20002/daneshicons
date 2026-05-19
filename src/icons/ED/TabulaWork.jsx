import React from 'react';

export const iconData = {
  "id": "TabulaWork",
  "name": "TabulaWork",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 9.47 L 11.79 3.15 L 20.35 9.07 L 17.37 19.04 L 6.97 19.28 Z"
      }
    ]
  ]
};

export const TabulaWork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 9.47 L 11.79 3.15 L 20.35 9.07 L 17.37 19.04 L 6.97 19.28 Z" />
      {children}
    </svg>
  );
});

export default TabulaWork;
