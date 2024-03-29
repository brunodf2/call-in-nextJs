import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
    username: z.string()
        .min(3)
        .regex(/ˆ([a-z\\-]+)$/i)
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })

    async function handleClaimUsername(data: ClaimUsernameFormData) {
        console.log(data)
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
            <TextInput
                size="sm"
                prefix="ignite.com/"
                placeholder="seu-usuário"
                {...register('username')}
            />
            <Button size="sm" type="submit">
                Reservar
                <ArrowRight />
            </Button>
        </Form>
    )
}
