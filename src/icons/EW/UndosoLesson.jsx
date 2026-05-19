import React from 'react';

export const iconData = {
  "id": "UndosoLesson",
  "name": "UndosoLesson",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.66 20.59 L 3.41 12.66 L 11.34 3.41 L 20.59 11.34 Z"
      }
    ]
  ]
};

export const UndosoLesson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.66 20.59 L 3.41 12.66 L 11.34 3.41 L 20.59 11.34 Z" />
      {children}
    </svg>
  );
});

export default UndosoLesson;
