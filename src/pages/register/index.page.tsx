import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";


export default function Register() {
    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você
                    pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1} />
            </Header>

            <Form>
                <label>
                    <Text size="sm">Nome de usuário</Text>
                    <TextInput
                        crossOrigin={undefined}
                        prefix="ignite.com/"
                        placeholder="seu-usuário"

                    />
                </label>
                <label>
                    <Text size="sm">Nome completo</Text>
                    <TextInput
                        crossOrigin={undefined}
                        placeholder="seu-usuário"
                    />
                </label>
                <Button type="submit" >
                    Próximo passo
                    <ArrowRight />
                </Button>
            </Form>
        </Container>
    )
}