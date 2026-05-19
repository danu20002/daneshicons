import React from 'react';

export const iconData = {
  "id": "FastoRudder",
  "name": "FastoRudder",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.98 6.60 L 17.40 5.98 L 18.02 17.40 L 6.60 18.02 Z"
      }
    ]
  ]
};

export const FastoRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.98 6.60 L 17.40 5.98 L 18.02 17.40 L 6.60 18.02 Z" />
      {children}
    </svg>
  );
});

export default FastoRudder;
