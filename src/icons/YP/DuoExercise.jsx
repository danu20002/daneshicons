import React from 'react';

export const iconData = {
  "id": "DuoExercise",
  "name": "DuoExercise",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 8.64 L 10.88 3.34 L 18.94 6.70 L 20.06 15.36 L 13.12 20.66 L 5.06 17.30 Z"
      }
    ]
  ]
};

export const DuoExercise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 8.64 L 10.88 3.34 L 18.94 6.70 L 20.06 15.36 L 13.12 20.66 L 5.06 17.30 Z" />
      {children}
    </svg>
  );
});

export default DuoExercise;
