import React from 'react';

export const iconData = {
  "id": "PlumboHood",
  "name": "PlumboHood",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 13.27 L 8.31 4.76 L 17.75 6.25 L 19.24 15.69 L 10.73 20.03 Z"
      }
    ]
  ]
};

export const PlumboHood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 13.27 L 8.31 4.76 L 17.75 6.25 L 19.24 15.69 L 10.73 20.03 Z" />
      {children}
    </svg>
  );
});

export default PlumboHood;
