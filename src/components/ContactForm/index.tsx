/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';

import { Aside, Container, InputWraper } from './styles';

export const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Favor informar seu nome'),

    email: Yup.string()
      .required('O Email é obrigatório')
      .email('Email inválido'),

    message: Yup.string()
      .required('Escreva sua mensagem'),

  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register, handleSubmit, formState,
  } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    alert(`SUCCESSO!! :-)\n\n${JSON.stringify(data, null, 4)}`);
    return false;
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Aside />
      <InputWraper>
        <h5>Contato</h5>
        <div className="form-group">
          <label>Nome</label>
          <input type="text" {...register('name')} className={`${errors.name ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            {errors.name?.message}
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            {errors.email?.message}
          </div>
        </div>

        <div className="form-group">
          <label>Mensagem</label>
          <textarea id="" rows={10} {...register('message')} className={`${errors.message ? 'is-invalid' : ''}`} placeholder="Mensagem" />
          <div className="invalid-feedback">
            {errors.message?.message}
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>

      </InputWraper>
    </Container>
  );
};
