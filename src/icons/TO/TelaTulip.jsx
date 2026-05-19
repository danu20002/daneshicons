import React from 'react';

export const iconData = {
  "id": "TelaTulip",
  "name": "TelaTulip",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.15 19.55 L 8.06 19.17 L 3.94 13.39 L 5.89 6.56 L 12.44 3.83 L 18.66 7.25 L 19.87 14.25 Z"
      }
    ]
  ]
};

export const TelaTulip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.15 19.55 L 8.06 19.17 L 3.94 13.39 L 5.89 6.56 L 12.44 3.83 L 18.66 7.25 L 19.87 14.25 Z" />
      {children}
    </svg>
  );
});

export default TelaTulip;
