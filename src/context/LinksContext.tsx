import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import Link, { LinksContextType } from "../@types/Link";
import useUser from "../hooks/useUser";
import { getAllLinks } from "../services/Links";
import ResponseAPI from "../@types/ReponseAPI";

const LinksContext = createContext<LinksContextType | null>(null);

interface Props {
  children: ReactNode;
}

const LinksProvider: FC<Props> = ({ children }) => {
  const [links, setLinks] = useState<Link[] | null>(null);

  const { token } = useUser();

  const { isLoading, error, refetch, isFetching } = useQuery({
    queryKey: "links",
    queryFn: () => {
      if (token) return getAllLinks(token);
      return null;
    },
    onSuccess: (data: ResponseAPI) => {
      if (data && !data.error) {
        setLinks(data.body as Link[]);
      }
    },
    enabled: false,
    retry: false,
  });

  useEffect(() => {
    void refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    links,
    isLoading: isLoading || isFetching,
    refetch,
    error,
    setLinks,
  };

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
};

export { LinksContext, LinksProvider };
