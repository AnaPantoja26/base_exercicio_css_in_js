import { FormEvent, useState } from 'react'

import { Form, BtnPesquisar, Campo } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Formulario = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const enviarFormulario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar>Pesquisar</BtnPesquisar>
    </Form>
  )
}

export default Formulario
