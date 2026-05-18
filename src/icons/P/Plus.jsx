import React from 'react';

export const iconData = {
  id: "Plus",
  name: "Plus",
  category: "P",
  nodes: [["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]]
};

export const Plus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      {children}
    </svg>
  );
});

export default Plus;
