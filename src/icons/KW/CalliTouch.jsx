import React from 'react';

export const iconData = {
  "id": "CalliTouch",
  "name": "CalliTouch",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.54 5.86 L 15.66 11.80 L 20.17 17.28 L 13.32 15.42 L 9.51 21.40 L 9.15 14.32 L 2.29 12.54 L 8.92 10.01 L 8.49 2.93 L 12.94 8.45 Z"
      }
    ]
  ]
};

export const CalliTouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.54 5.86 L 15.66 11.80 L 20.17 17.28 L 13.32 15.42 L 9.51 21.40 L 9.15 14.32 L 2.29 12.54 L 8.92 10.01 L 8.49 2.93 L 12.94 8.45 Z" />
      {children}
    </svg>
  );
});

export default CalliTouch;
