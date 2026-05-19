import React from 'react';

export const iconData = {
  "id": "RepsoRescue",
  "name": "RepsoRescue",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.29 3.03 L 17.14 4.44 L 20.97 10.29 L 19.56 17.14 L 13.71 20.97 L 6.86 19.56 L 3.03 13.71 L 4.44 6.86 Z"
      }
    ]
  ]
};

export const RepsoRescue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.29 3.03 L 17.14 4.44 L 20.97 10.29 L 19.56 17.14 L 13.71 20.97 L 6.86 19.56 L 3.03 13.71 L 4.44 6.86 Z" />
      {children}
    </svg>
  );
});

export default RepsoRescue;
