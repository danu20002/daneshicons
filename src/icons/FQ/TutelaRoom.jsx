import React from 'react';

export const iconData = {
  "id": "TutelaRoom",
  "name": "TutelaRoom",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.22 2.95 L 21.09 8.87 L 20.11 17.15 L 13.03 21.55 L 5.17 18.76 L 2.46 10.88 L 6.93 3.84 Z"
      }
    ]
  ]
};

export const TutelaRoom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.22 2.95 L 21.09 8.87 L 20.11 17.15 L 13.03 21.55 L 5.17 18.76 L 2.46 10.88 L 6.93 3.84 Z" />
      {children}
    </svg>
  );
});

export default TutelaRoom;
