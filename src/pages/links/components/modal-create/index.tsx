import { ChangeEvent, FC, useState } from "react";
import Modal from "../../../../components/common/modal";
import Input from "../../../../components/forms/input";
import Button from "../../../../components/common/button";
import { ModalContentStyled } from "./styles";
import { useQuery } from "react-query";
import { createLink } from "../../../../services/Links";
import useUser from "../../../../hooks/useUser";
import useLinks from "../../../../hooks/useLinks";
import ResponseAPI from "../../../../@types/ReponseAPI";
import Link from "../../../../@types/Link";

interface Props {
  state: boolean;
  onClose: () => void;
}

const ModalCreate: FC<Props> = ({ state, onClose }) => {
  const { handleAddLink } = useLinks();
  const { token } = useUser();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

  const { isLoading, isFetching, error, refetch } = useQuery({
    queryKey: "create_link",
    queryFn: () => {
      if (token) {
        const tagsArr = tags.split(",");
        return createLink({ name, url, tags: tagsArr }, token);
      }
      return null;
    },
    onSuccess: (data: ResponseAPI) => {
      if (!data.error && data.body) {
        handleAddLink(data.body as Link);
        clearFields();
        onClose();
      }
    },
    retry: false,
    enabled: false,
  });

  let errorMessage: string | null = null;

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void refetch();
  };

  const clearFields = () => {
    setName("");
    setUrl("");
    setTags("");
  };

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Modal state={state} onClose={onClose}>
      <ModalContentStyled>
        <h3>New link</h3>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p>{errorMessage}</p>}

          <Input
            value={name}
            handleChange={(val) => setName(val)}
            placeholder="Name"
            isRequired
          />

          <Input
            value={url}
            handleChange={(val) => setUrl(val)}
            placeholder="URL"
            isRequired
          />

          <Input
            value={tags}
            handleChange={(val) => setTags(val)}
            placeholder="Tags separete por ,"
          />

          <Button
            isLoading={isLoading || isFetching}
            isDisabled={isLoading || isFetching}
          >
            Create
          </Button>
        </form>
      </ModalContentStyled>
    </Modal>
  );
};

export default ModalCreate;
