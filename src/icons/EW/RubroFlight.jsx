import React from 'react';

export const iconData = {
  "id": "RubroFlight",
  "name": "RubroFlight",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.55 21.62 L 3.39 7.66 L 20.06 6.71 Z"
      }
    ]
  ]
};

export const RubroFlight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.55 21.62 L 3.39 7.66 L 20.06 6.71 Z" />
      {children}
    </svg>
  );
});

export default RubroFlight;
