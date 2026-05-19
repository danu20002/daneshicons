import React from 'react';

export const iconData = {
  "id": "LuciHuman",
  "name": "LuciHuman",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.86 4.43 L 16.98 5.50 L 20.12 13.07 L 15.14 19.57 L 7.02 18.50 L 3.88 10.93 Z"
      }
    ]
  ]
};

export const LuciHuman = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.86 4.43 L 16.98 5.50 L 20.12 13.07 L 15.14 19.57 L 7.02 18.50 L 3.88 10.93 Z" />
      {children}
    </svg>
  );
});

export default LuciHuman;
