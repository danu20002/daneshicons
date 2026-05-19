import React from 'react';

export const iconData = {
  "id": "OzoDistill",
  "name": "OzoDistill",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.60 2.66 L 15.40 2.66 L 20.61 7.03 L 21.79 13.73 L 18.39 19.61 L 12.00 21.94 L 5.61 19.61 L 2.21 13.73 L 3.40 7.03 Z"
      }
    ]
  ]
};

export const OzoDistill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.60 2.66 L 15.40 2.66 L 20.61 7.03 L 21.79 13.73 L 18.39 19.61 L 12.00 21.94 L 5.61 19.61 L 2.21 13.73 L 3.40 7.03 Z" />
      {children}
    </svg>
  );
});

export default OzoDistill;
