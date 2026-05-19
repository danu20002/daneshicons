import React from 'react';

export const iconData = {
  "id": "PulsoGuest",
  "name": "PulsoGuest",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.02 13.35 L 16.72 18.63 L 10.65 20.02 L 5.37 16.72 L 3.98 10.65 L 7.28 5.37 L 13.35 3.98 L 18.63 7.28 Z"
      }
    ]
  ]
};

export const PulsoGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.02 13.35 L 16.72 18.63 L 10.65 20.02 L 5.37 16.72 L 3.98 10.65 L 7.28 5.37 L 13.35 3.98 L 18.63 7.28 Z" />
      {children}
    </svg>
  );
});

export default PulsoGuest;
