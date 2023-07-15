import Wrapper from "../../components/wrapper";
import Header from "./components/header";
import Link from "../../@types/Link";
import ListOfLinks from "./components/list-of-links";
import { LinksGrid } from "./styles.tsx";
import Sidebar from "./components/sidebar";

function Links() {
  const links: Link[] = [
    {
      id: "0",
      name: "Google",
      url: "https://google.com",
      description: "Search engine",
      tags: ["search", "engine", "google"],
    },
    {
      id: "1",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
    {
      id: "2",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
    {
      id: "3",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
    {
      id: "4",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
    {
      id: "5",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
    {
      id: "6",
      name: "Facebook",
      url: "https://facebook.com",
      description: "Social media",
      tags: ["social", "media", "facebook"],
    },
  ];

  return (
    <Wrapper>
      <LinksGrid>
        <Sidebar />
        <div>
          <Header />
          <ListOfLinks links={links} />
        </div>
      </LinksGrid>
    </Wrapper>
  );
}

export default Links;
