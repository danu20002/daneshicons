import React from 'react';

export const iconData = {
  "id": "NeoLark",
  "name": "NeoLark",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 20.43 L 3.30 12.51 L 8.83 3.89 L 18.73 6.48 L 19.33 16.70 Z"
      }
    ]
  ]
};

export const NeoLark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 20.43 L 3.30 12.51 L 8.83 3.89 L 18.73 6.48 L 19.33 16.70 Z" />
      {children}
    </svg>
  );
});

export default NeoLark;
