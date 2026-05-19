import React from 'react';

export const iconData = {
  "id": "TelluroKing",
  "name": "TelluroKing",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.35 4.39 L 21.77 13.69 L 15.42 21.30 L 5.65 19.61 L 2.23 10.31 L 8.58 2.70 Z"
      }
    ]
  ]
};

export const TelluroKing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.35 4.39 L 21.77 13.69 L 15.42 21.30 L 5.65 19.61 L 2.23 10.31 L 8.58 2.70 Z" />
      {children}
    </svg>
  );
});

export default TelluroKing;
