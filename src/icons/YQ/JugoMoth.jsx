import React from 'react';

export const iconData = {
  "id": "JugoMoth",
  "name": "JugoMoth",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 16.63 L 11.33 20.09 L 4.66 15.46 L 5.33 7.37 L 12.67 3.91 L 19.34 8.54 Z"
      }
    ]
  ]
};

export const JugoMoth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 16.63 L 11.33 20.09 L 4.66 15.46 L 5.33 7.37 L 12.67 3.91 L 19.34 8.54 Z" />
      {children}
    </svg>
  );
});

export default JugoMoth;
