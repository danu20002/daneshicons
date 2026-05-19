import React from 'react';

export const iconData = {
  "id": "SpanoSnooze",
  "name": "SpanoSnooze",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 16.81 L 11.17 20.19 L 4.49 15.37 L 5.33 7.19 L 12.83 3.81 L 19.51 8.63 Z"
      }
    ]
  ]
};

export const SpanoSnooze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 16.81 L 11.17 20.19 L 4.49 15.37 L 5.33 7.19 L 12.83 3.81 L 19.51 8.63 Z" />
      {children}
    </svg>
  );
});

export default SpanoSnooze;
