import React from 'react';

export const iconData = {
  "id": "IllumiVouch",
  "name": "IllumiVouch",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.32 3.80 L 15.50 3.23 L 21.04 9.26 L 19.77 17.36 L 12.66 21.42 L 5.04 18.39 L 2.67 10.54 Z"
      }
    ]
  ]
};

export const IllumiVouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.32 3.80 L 15.50 3.23 L 21.04 9.26 L 19.77 17.36 L 12.66 21.42 L 5.04 18.39 L 2.67 10.54 Z" />
      {children}
    </svg>
  );
});

export default IllumiVouch;
