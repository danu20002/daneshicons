import React from 'react';

export const iconData = {
  "id": "SequenFlight",
  "name": "SequenFlight",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.75 2.79 L 19.67 6.85 L 20.81 14.78 L 15.32 20.62 L 7.33 19.97 L 2.85 13.32 L 5.27 5.67 Z"
      }
    ]
  ]
};

export const SequenFlight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.75 2.79 L 19.67 6.85 L 20.81 14.78 L 15.32 20.62 L 7.33 19.97 L 2.85 13.32 L 5.27 5.67 Z" />
      {children}
    </svg>
  );
});

export default SequenFlight;
