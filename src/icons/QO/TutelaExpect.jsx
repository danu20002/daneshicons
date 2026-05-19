import React from 'react';

export const iconData = {
  "id": "TutelaExpect",
  "name": "TutelaExpect",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.99 19.37 L 9.61 20.04 L 4.63 15.99 L 3.96 9.61 L 8.01 4.63 L 14.39 3.96 L 19.37 8.01 L 20.04 14.39 Z"
      }
    ]
  ]
};

export const TutelaExpect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.99 19.37 L 9.61 20.04 L 4.63 15.99 L 3.96 9.61 L 8.01 4.63 L 14.39 3.96 L 19.37 8.01 L 20.04 14.39 Z" />
      {children}
    </svg>
  );
});

export default TutelaExpect;
