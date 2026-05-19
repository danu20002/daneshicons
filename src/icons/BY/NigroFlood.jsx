import React from 'react';

export const iconData = {
  "id": "NigroFlood",
  "name": "NigroFlood",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.82 3.82 L 20.03 10.25 L 16.15 19.10 L 6.53 18.14 L 4.47 8.69 Z"
      }
    ]
  ]
};

export const NigroFlood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.82 3.82 L 20.03 10.25 L 16.15 19.10 L 6.53 18.14 L 4.47 8.69 Z" />
      {children}
    </svg>
  );
});

export default NigroFlood;
