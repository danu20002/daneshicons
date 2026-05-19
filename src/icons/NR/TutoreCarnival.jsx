import React from 'react';

export const iconData = {
  "id": "TutoreCarnival",
  "name": "TutoreCarnival",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.21 20.06 L 8.58 19.97 L 3.94 15.21 L 4.03 8.58 L 8.79 3.94 L 15.42 4.03 L 20.06 8.79 L 19.97 15.42 Z"
      }
    ]
  ]
};

export const TutoreCarnival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.21 20.06 L 8.58 19.97 L 3.94 15.21 L 4.03 8.58 L 8.79 3.94 L 15.42 4.03 L 20.06 8.79 L 19.97 15.42 Z" />
      {children}
    </svg>
  );
});

export default TutoreCarnival;
