import React from 'react';

export const iconData = {
  "id": "TyphoPaint",
  "name": "TyphoPaint",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 8.47 L 11.29 3.72 L 18.82 7.25 L 19.52 15.53 L 12.71 20.28 L 5.18 16.75 Z"
      }
    ]
  ]
};

export const TyphoPaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 8.47 L 11.29 3.72 L 18.82 7.25 L 19.52 15.53 L 12.71 20.28 L 5.18 16.75 Z" />
      {children}
    </svg>
  );
});

export default TyphoPaint;
