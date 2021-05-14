import React, { useState } from 'react';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    user: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = userInfo.user.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={
        (event) => {
          event.preventDefault();

          fetch('https://instalura-api.vercel.app/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: 'teste',
              name: 'testes',
            }),
          })
            .then((res) => res.ok)
            .then((convertedRes) => console.log(convertedRes));
        }
    }
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="email"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        disabled={isFormValid}
        variant="primary.main"
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function RegisterForm({ modalProps }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
