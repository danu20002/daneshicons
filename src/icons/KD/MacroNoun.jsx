import React from 'react';

export const iconData = {
  "id": "MacroNoun",
  "name": "MacroNoun",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 2.78 L 14.08 6.75 L 20.04 6.90 L 17.64 12.36 L 19.33 18.07 L 13.40 17.47 L 8.49 20.85 L 7.23 15.03 L 2.50 11.40 L 7.65 8.40 Z"
      }
    ]
  ]
};

export const MacroNoun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 2.78 L 14.08 6.75 L 20.04 6.90 L 17.64 12.36 L 19.33 18.07 L 13.40 17.47 L 8.49 20.85 L 7.23 15.03 L 2.50 11.40 L 7.65 8.40 Z" />
      {children}
    </svg>
  );
});

export default MacroNoun;
