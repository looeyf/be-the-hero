import React from "react";

export default function Header({ children }) {
  /* se passar direto Header(props), ele pega todas as propriedades ai usa props.title, props.qlqr_coisa, mas pode ser
  desestruturado usando as chaves, ai pega só o que queremos e não tudo { title } por exemplo 
  props.children -> busca tudo que está dentro da tag e nao seus atributos, sendo texto ou html podendo usar html dentro da view*/
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
