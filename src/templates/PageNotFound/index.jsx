import { GridContente } from "../../components/GridContente";

export const PageNotFound = () => {
  return (
    <GridContente
      title="Error 404"
      html='<p>A página que você busca não foi encontrada. <a href="/">Clique para voltar</a></p> '
    />
  );
};
