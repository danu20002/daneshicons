import React from 'react';

export const iconData = {
  "id": "QuiesSnooze",
  "name": "QuiesSnooze",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.55 7.56 L 21.19 14.90 L 16.44 20.55 L 9.10 21.19 L 3.45 16.44 L 2.81 9.10 L 7.56 3.45 L 14.90 2.81 Z"
      }
    ]
  ]
};

export const QuiesSnooze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.55 7.56 L 21.19 14.90 L 16.44 20.55 L 9.10 21.19 L 3.45 16.44 L 2.81 9.10 L 7.56 3.45 L 14.90 2.81 Z" />
      {children}
    </svg>
  );
});

export default QuiesSnooze;
