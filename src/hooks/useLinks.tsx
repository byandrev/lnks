import { useContext } from "react";
import { LinksContext } from "../context/LinksContext";
import Link from "../@types/Link";

function useLinks() {
  const context = useContext(LinksContext);

  const handleAddLink = (link: Link) => {
    if (context) {
      context.setLinks(context.links ? context.links.concat(link) : [link]);
    }
  };

  return { ...context, handleAddLink };
}

export default useLinks;
