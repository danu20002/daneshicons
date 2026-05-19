import React from 'react';

export const iconData = {
  "id": "YenClaw",
  "name": "YenClaw",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.68 19.64 L 12.32 15.61 L 6.79 20.71 L 8.67 13.42 L 2.11 9.74 L 9.62 9.27 L 11.09 1.89 L 13.86 8.89 L 21.33 8.01 L 15.53 12.81 Z"
      }
    ]
  ]
};

export const YenClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.68 19.64 L 12.32 15.61 L 6.79 20.71 L 8.67 13.42 L 2.11 9.74 L 9.62 9.27 L 11.09 1.89 L 13.86 8.89 L 21.33 8.01 L 15.53 12.81 Z" />
      {children}
    </svg>
  );
});

export default YenClaw;
