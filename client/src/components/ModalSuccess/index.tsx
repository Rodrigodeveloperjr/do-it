import { useNavigate } from "react-router-dom";
import interrogation from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";

interface IModalSuccess {
  setOpenModalSucess: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSuccess = ({ setOpenModalSucess }: IModalSuccess) => {
  const navigate = useNavigate();

  return (
    <Container>
      <header>
        <div>
          <figure>
            <img src={interrogation} alt="!" />
          </figure>

          <h2>Yeess..</h2>
        </div>

        <Button
          color="miniModal"
          size="miniButton"
          type="button"
          onClick={() => setOpenModalSucess(false)}
        >
          <img src={x} alt="x" />
        </Button>
      </header>

      <div>
        <h3>
          Seu cadastro deu super certo, <b>vamos lá</b>
        </h3>

        <Button
          color="secondary"
          size="modal"
          type="button"
          onClick={() => {
            setOpenModalSucess(false);

            navigate("/");
          }}
        >
          Ir para o login agora
        </Button>

        <p>
          Você já pode começar criando <b>suas listas</b> de tarefas agora
          mesmo...
        </p>
      </div>
    </Container>
  );
};

export { ModalSuccess };
