/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';

import { useState } from 'react';

import AsideImg from '../../../public/hanover.jpg';

import {
  Aside, Container, InputWraper, SubmitResponse,
} from './styles';

interface IContactData {
  name: string;
  email: string;
  message: string;
}
export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('teste');
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
    register, handleSubmit, formState, reset,
  } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data:IContactData) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res:Response) => {
      if (res.status === 200) {
        setSubmitted(true);
        setSubmittedMessage('Obrigado pelo contato!');
        reset();
      }
    }).catch((err) => {
      console.log(err);
      setSubmittedMessage('Houve um erro no envio da sua mensagem, por favor tente mais tarde!');
    });

    return false;
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {submitted
        ? (
          <SubmitResponse>
            {submittedMessage}
          </SubmitResponse>
        )
        : (
          <>
            <Aside>
              <h5>Hanover</h5>
              <Image src={AsideImg} />
            </Aside>
            <InputWraper>
              <h5>Contato</h5>
              <div className="form-group">
                {/* <label>Nome</label> */}
                <input
                  type="text"
                  {...register('name')}
                  className={`${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Nome"
                />
                <div className="invalid-feedback">
                  {errors.name?.message}
                </div>
              </div>
              <div className="form-group">
                {/* <label>Email</label> */}
                <input
                  type="text"
                  {...register('email')}
                  className={`${errors.email ? 'is-invalid' : ''}`}
                  placeholder="E-mail"
                />
                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>

              <div className="form-group">
                {/* <label>Mensagem</label> */}
                <textarea
                  id=""
                  rows={15}
                  {...register('message')}
                  className={`${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Mensagem"
                />
                <div className="invalid-feedback">
                  {errors.message?.message}
                </div>
              </div>

              <div className="form-group">
                <button type="submit">Enviar</button>
              </div>

            </InputWraper>
          </>
        )}
    </Container>
  );
};
