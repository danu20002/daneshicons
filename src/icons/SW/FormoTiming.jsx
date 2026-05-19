import React from 'react';

export const iconData = {
  "id": "FormoTiming",
  "name": "FormoTiming",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.44 22.46 L 11.26 16.47 L 6.33 21.13 L 8.32 14.64 L 1.54 14.44 L 7.53 11.26 L 2.87 6.33 L 9.36 8.32 L 9.56 1.54 L 12.74 7.53 L 17.67 2.87 L 15.68 9.36 L 22.46 9.56 L 16.47 12.74 L 21.13 17.67 L 14.64 15.68 Z"
      }
    ]
  ]
};

export const FormoTiming = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.44 22.46 L 11.26 16.47 L 6.33 21.13 L 8.32 14.64 L 1.54 14.44 L 7.53 11.26 L 2.87 6.33 L 9.36 8.32 L 9.56 1.54 L 12.74 7.53 L 17.67 2.87 L 15.68 9.36 L 22.46 9.56 L 16.47 12.74 L 21.13 17.67 L 14.64 15.68 Z" />
      {children}
    </svg>
  );
});

export default FormoTiming;
