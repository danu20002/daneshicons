import React from 'react';

export const iconData = {
  "id": "RadioHumble",
  "name": "RadioHumble",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.23 19.77 L 9.18 20.93 L 3.26 15.37 L 3.92 7.26 L 10.66 2.73 L 18.42 5.17 L 21.34 12.76 Z"
      }
    ]
  ]
};

export const RadioHumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.23 19.77 L 9.18 20.93 L 3.26 15.37 L 3.92 7.26 L 10.66 2.73 L 18.42 5.17 L 21.34 12.76 Z" />
      {children}
    </svg>
  );
});

export default RadioHumble;
