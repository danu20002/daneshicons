import React from 'react';

export const iconData = {
  "id": "FumoMaple",
  "name": "FumoMaple",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.74 20.09 L 2.37 11.48 L 7.63 3.40 L 17.26 3.91 L 21.63 12.52 L 16.37 20.60 Z"
      }
    ]
  ]
};

export const FumoMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.74 20.09 L 2.37 11.48 L 7.63 3.40 L 17.26 3.91 L 21.63 12.52 L 16.37 20.60 Z" />
      {children}
    </svg>
  );
});

export default FumoMaple;
