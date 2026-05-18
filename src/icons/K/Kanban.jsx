import React from 'react';

export const iconData = {
  id: "Kanban",
  name: "Kanban",
  category: "K",
  nodes: [["path",{"d":"M5 3v14"}],["path",{"d":"M12 3v8"}],["path",{"d":"M19 3v18"}]]
};

export const Kanban = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 3v14" />
      <path d="M12 3v8" />
      <path d="M19 3v18" />
      {children}
    </svg>
  );
});

export default Kanban;
