import React from 'react';

export const iconData = {
  "id": "QuatroPorcupine",
  "name": "QuatroPorcupine",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.26 20.33 L 12.34 16.22 L 9.12 20.91 L 9.25 15.23 L 3.67 16.26 L 7.78 12.34 L 3.09 9.12 L 8.77 9.25 L 7.74 3.67 L 11.66 7.78 L 14.88 3.09 L 14.75 8.77 L 20.33 7.74 L 16.22 11.66 L 20.91 14.88 L 15.23 14.75 Z"
      }
    ]
  ]
};

export const QuatroPorcupine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.26 20.33 L 12.34 16.22 L 9.12 20.91 L 9.25 15.23 L 3.67 16.26 L 7.78 12.34 L 3.09 9.12 L 8.77 9.25 L 7.74 3.67 L 11.66 7.78 L 14.88 3.09 L 14.75 8.77 L 20.33 7.74 L 16.22 11.66 L 20.91 14.88 L 15.23 14.75 Z" />
      {children}
    </svg>
  );
});

export default QuatroPorcupine;
