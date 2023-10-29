import Image from 'next/image'

import SignBanner from '@/components/signBanner'
import RegisterInput from '@/components/registerInput'
import Button from '@/components/button'


const SignUp = () => {
    return (
        <main className="h-screen flex justify-center">

            <SignBanner />

            <div className="w-2/3 flex flex-col items-center justify-center bg-grey-fg">
                <Image src={'/logo.png'} alt="test" width={300} height={400} />

                <div className="w-4/5 flex flex-col items-center justify-center gap-4 my-6">
                    <RegisterInput placeholder='* Informe seu Nome' />
                    <RegisterInput placeholder='* Informe seu Registro Acadêmico (RA)' />
                    <RegisterInput placeholder='* Selecione seu curso' />
                    <div className='w-3/5 flex justify-between'>
                        <RegisterInput placeholder='* Email' width='w-2/5'/>
                        <RegisterInput placeholder='* Confirme seu Email' width='w-2/5'/>
                    </div>
                    <RegisterInput placeholder='* Informe sua senha' />
                    <RegisterInput placeholder='* Confirme sua senha' />
                    <Button title='ENTRAR' width='w-1/6' height='h-12' nav='/signIn' />
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>
        </main>
    )
}

export default SignUp