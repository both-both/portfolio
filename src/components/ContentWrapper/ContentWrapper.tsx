import type { ContentWrapperProps } from "./ContentWrapper.types";

import { useEffect } from "react";

export const ContentWrapper = ({
  title,
  description,
  children,
}: ContentWrapperProps) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);
  return <div>{children}</div>;
};
