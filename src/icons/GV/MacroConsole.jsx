import React from 'react';

export const iconData = {
  "id": "MacroConsole",
  "name": "MacroConsole",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 11.17 5.86 10.04 Q 11.79 7.58 17.71 5.13 Q 16.88 12.18 16.06 19.23 Q 11.29 19.33 6.51 19.42 Q 5.96 18.56 5.41 17.70 Q 7.29 15.00 9.17 12.31 Z"
      }
    ]
  ]
};

export const MacroConsole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 11.17 5.86 10.04 Q 11.79 7.58 17.71 5.13 Q 16.88 12.18 16.06 19.23 Q 11.29 19.33 6.51 19.42 Q 5.96 18.56 5.41 17.70 Q 7.29 15.00 9.17 12.31 Z" />
      {children}
    </svg>
  );
});

export default MacroConsole;
