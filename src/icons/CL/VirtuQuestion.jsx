import React from 'react';

export const iconData = {
  "id": "VirtuQuestion",
  "name": "VirtuQuestion",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.02 18.60 L 20.96 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 19.89 L 20.96 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 20.08 L 9.81 16.91"
      }
    ],
    [
      "circle",
      {
        "cx": "18.02",
        "cy": "18.60",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.44",
        "cy": "19.89",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.96",
        "cy": "20.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.81",
        "cy": "16.91",
        "r": "1.5"
      }
    ]
  ]
};

export const VirtuQuestion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.02 18.60 L 20.96 20.08" />
      <path d="M 7.44 19.89 L 20.96 20.08" />
      <path d="M 20.96 20.08 L 9.81 16.91" />
      <circle cx="18.02" cy="18.60" r="1.5" />
      <circle cx="7.44" cy="19.89" r="1.5" />
      <circle cx="20.96" cy="20.08" r="1.5" />
      <circle cx="9.81" cy="16.91" r="1.5" />
      {children}
    </svg>
  );
});

export default VirtuQuestion;
