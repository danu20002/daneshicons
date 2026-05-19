import React from 'react';

export const iconData = {
  "id": "PhrenPassage",
  "name": "PhrenPassage",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.66 11.01 L 17.41 13.62 L 19.53 18.13 L 14.68 16.97 L 12.99 21.66 L 10.38 17.41 L 5.87 19.53 L 7.03 14.68 L 2.34 12.99 L 6.59 10.38 L 4.47 5.87 L 9.32 7.03 L 11.01 2.34 L 13.62 6.59 L 18.13 4.47 L 16.97 9.32 Z"
      }
    ]
  ]
};

export const PhrenPassage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.66 11.01 L 17.41 13.62 L 19.53 18.13 L 14.68 16.97 L 12.99 21.66 L 10.38 17.41 L 5.87 19.53 L 7.03 14.68 L 2.34 12.99 L 6.59 10.38 L 4.47 5.87 L 9.32 7.03 L 11.01 2.34 L 13.62 6.59 L 18.13 4.47 L 16.97 9.32 Z" />
      {children}
    </svg>
  );
});

export default PhrenPassage;
