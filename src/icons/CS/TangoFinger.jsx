import React from 'react';

export const iconData = {
  "id": "TangoFinger",
  "name": "TangoFinger",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.52 11.66 L 15.26 20.95 L 4.49 17.87 L 4.10 6.67 L 14.62 2.84 Z"
      }
    ]
  ]
};

export const TangoFinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.52 11.66 L 15.26 20.95 L 4.49 17.87 L 4.10 6.67 L 14.62 2.84 Z" />
      {children}
    </svg>
  );
});

export default TangoFinger;
