import React from 'react';

export const iconData = {
  "id": "TutoreSquare",
  "name": "TutoreSquare",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 9.54 L 6.41 4.10 L 12.80 2.36 L 18.81 5.13 L 21.63 11.11 L 19.95 17.51 L 14.55 21.33 L 7.95 20.79 L 3.25 16.13 Z"
      }
    ]
  ]
};

export const TutoreSquare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 9.54 L 6.41 4.10 L 12.80 2.36 L 18.81 5.13 L 21.63 11.11 L 19.95 17.51 L 14.55 21.33 L 7.95 20.79 L 3.25 16.13 Z" />
      {children}
    </svg>
  );
});

export default TutoreSquare;
