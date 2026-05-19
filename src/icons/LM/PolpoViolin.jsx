import React from 'react';

export const iconData = {
  "id": "PolpoViolin",
  "name": "PolpoViolin",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.33 18.89 L 7.10 19.20 L 3.64 9.56 L 11.73 3.30 L 20.20 9.06 Z"
      }
    ]
  ]
};

export const PolpoViolin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.33 18.89 L 7.10 19.20 L 3.64 9.56 L 11.73 3.30 L 20.20 9.06 Z" />
      {children}
    </svg>
  );
});

export default PolpoViolin;
