import React from 'react';

export const iconData = {
  "id": "YeastHyphen",
  "name": "YeastHyphen",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.46 3.61 L 17.53 19.18 L 3.01 13.20 Z"
      }
    ]
  ]
};

export const YeastHyphen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.46 3.61 L 17.53 19.18 L 3.01 13.20 Z" />
      {children}
    </svg>
  );
});

export default YeastHyphen;
