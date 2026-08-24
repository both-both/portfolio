import type { ContentWrapperProps } from "./ContentWrapper.types";

export const ContentWrapper = ({
    title, 
    description,  
    children
    }: ContentWrapperProps) => { document.title = title;

        if (description) {
           const meta = document.querySelector ('meta [name="description"]')
           if (meta) meta.setAttribute("content", description);
        }
    return (


    );
};
