import React from 'react';

export const iconData = {
  "id": "NanoNoun",
  "name": "NanoNoun",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.12 17.13 L 2.80 10.06 L 6.87 4.12 L 13.94 2.80 L 19.88 6.87 L 21.20 13.94 L 17.13 19.88 L 10.06 21.20 Z"
      }
    ]
  ]
};

export const NanoNoun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.12 17.13 L 2.80 10.06 L 6.87 4.12 L 13.94 2.80 L 19.88 6.87 L 21.20 13.94 L 17.13 19.88 L 10.06 21.20 Z" />
      {children}
    </svg>
  );
});

export default NanoNoun;
