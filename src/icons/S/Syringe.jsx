import React from 'react';

export const iconData = {
  id: "Syringe",
  name: "Syringe",
  category: "S",
  nodes: [["path",{"d":"m18 2 4 4"}],["path",{"d":"m17 7 3-3"}],["path",{"d":"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{"d":"m9 11 4 4"}],["path",{"d":"m5 19-3 3"}],["path",{"d":"m14 4 6 6"}]]
};

export const Syringe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
      {children}
    </svg>
  );
});

export default Syringe;
