import React from 'react';

export const iconData = {
  "id": "TachioEnamel",
  "name": "TachioEnamel",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.08 12.53 L 17.62 20.78 L 3.73 9.44 L 16.38 7.79 L 18.24 13.14"
      }
    ],
    [
      "circle",
      {
        "cx": "20.08",
        "cy": "12.53",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "17.62",
        "cy": "20.78",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "3.73",
        "cy": "9.44",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "16.38",
        "cy": "7.79",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "18.24",
        "cy": "13.14",
        "r": "0.78"
      }
    ]
  ]
};

export const TachioEnamel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.08 12.53 L 17.62 20.78 L 3.73 9.44 L 16.38 7.79 L 18.24 13.14" />
      <circle cx="20.08" cy="12.53" r="0.87" />
      <circle cx="17.62" cy="20.78" r="1.35" />
      <circle cx="3.73" cy="9.44" r="1.44" />
      <circle cx="16.38" cy="7.79" r="1.26" />
      <circle cx="18.24" cy="13.14" r="0.78" />
      {children}
    </svg>
  );
});

export default TachioEnamel;
