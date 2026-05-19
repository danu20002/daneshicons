import React from 'react';

export const iconData = {
  "id": "MilleWound",
  "name": "MilleWound",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.40 6.39 L 16.89 12.97 L 17.61 20.40 L 11.03 16.89 L 3.60 17.61 L 7.11 11.03 L 6.39 3.60 L 12.97 7.11 Z"
      }
    ]
  ]
};

export const MilleWound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.40 6.39 L 16.89 12.97 L 17.61 20.40 L 11.03 16.89 L 3.60 17.61 L 7.11 11.03 L 6.39 3.60 L 12.97 7.11 Z" />
      {children}
    </svg>
  );
});

export default MilleWound;
