import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <main className="flex flex-col min-h-screen max-w-screen bg-zinc-900 py-4 px-10 overflow-x-hidden">
      <header className="flex h-[60px] border-b border-slate-900 items-center justify-start">
        <div className="flex flex-row gap-2">
          <Image
            src={'/assets/logo.png'}
            alt="FDK Logo"
            width={30}
            height={20}
            className="h-[40px] w-[40px]"
          />
          <div>
            <span>
              <label className="text-white text-4xl">FDK</label>
            </span>
          </div>
        </div>
      </header>

      <section className="flex flex-col flex-1 justify-start items-start gap-4 mt-10">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-white text-4xl">Política de Privacidade</p>
            <h2 className="text-sm text-white">
              Data de entrada em vigor: 15 de Outubro de 2023
            </h2>
            <p className="text-white text-xl font-thin">
              O compromisso com a privacidade e a segurança dos dados dos nossos
              usuários é uma prioridade fundamental para FDK, a desenvolvedora
              do aplicativo de gerenciamento de jogos de society (FDK). Nossa
              Política de Privacidade visa explicar como coletamos, usamos e
              protegemos as informações pessoais dos nossos usuários. Ao
              utilizar o FDK, você concorda com os termos desta política.
            </p>
          </div>
          <div className="text-white">
            <ol className="list-decimal px-6 py-0 gap-2 flex flex-col font-bold"></ol>
            <li className="text-xl list-decimal py-4">Coleta de Informações</li>
            <p className="font-normal text-sm py-2">
              1.1 Informações Pessoais: Coletamos informações pessoais que você
              fornece voluntariamente ao se cadastrar ou utilizar o FDK, tais
              como nome, endereço de e-mail, senha, data de nascimento, número
              de telefone. Essas informações são essenciais para oferecer a você
              os serviços do aplicativo.
            </p>
            <p className="font-normal text-sm py-2">
              1.3. Informações de Uso: Coletamos informações de uso do
              aplicativo, como páginas visitadas, funcionalidades utilizadas e
              informações do dispositivo. Essas informações nos ajudam a
              melhorar o desempenho do aplicativo e aprimorar a experiência do
              usuário.
            </p>
            <li className="text-xl list-decimal py-4">Uso das Informações</li>
            <p className="font-normal text-sm py-2">
              2.1. Fornecimento de Serviços: Utilizamos as informações coletadas
              para fornecer os serviços do FDK, incluindo o gerenciamento das
              partidas, geração de relatórios, e outras funcionalidades
              relacionadas.
            </p>
            <p className="font-normal text-sm py-2">
              2.1. Podemos enviar notificações e comunicações relacionadas ao
              FDK, como atualizações, informações de conta e newsletters. Você
              pode optar por não receber comunicações não essenciais.
            </p>
            <li className="text-xl list-decimal py-4">
              Compartilhamento de Informações
            </li>
            <p className="font-normal text-sm py-2">
              Não compartilhamos informações pessoais com terceiros, a menos que
              seja necessário para fornecer os serviços do aplicativo ou cumprir
              obrigações legais. Isso inclui terceiros como instituições
              financeiras, prestadores de serviços de processamento de pagamento
              e parceiros de análise de dados. Exigimos que esses terceiros
              mantenham a confidencialidade e a segurança dos dados dos nossos
              usuários.
            </p>
            <li className="text-xl list-decimal py-4">Segurança de Dados</li>
            <p className="font-normal text-sm py-2">
              Implementamos medidas de segurança técnicas, administrativas e
              físicas para proteger as informações dos nossos usuários contra
              acesso não autorizado, divulgação ou modificação.
            </p>
            <li className="text-xl list-decimal py-4">Retenção de Dados</li>
            <p className="font-normal text-sm py-2">
              Mantemos as informações pessoais dos usuários enquanto forem
              necessárias para os fins descritos nesta política ou para cumprir
              obrigações legais. Você pode solicitar a exclusão dos seus dados a
              qualquer momento, sujeito a requisitos legais de retenção.
            </p>
            <li className="text-xl list-decimal py-4">Direitos dos Usuários</li>
            <p className="font-normal text-sm py-2">
              Os usuários têm o direito de acessar, corrigir, atualizar ou
              excluir suas informações pessoais a qualquer momento. Para exercer
              esses direitos ou para fazer perguntas sobre esta Política de
              Privacidade, entre em contato conosco em
              guilhermemigliano@gmail.com;
            </p>
            <li className="text-xl list-decimal py-4">
              Alterações na Política de Privacidade
            </li>
            <p className="font-normal text-sm py-2">
              Reservamos o direito de atualizar esta Política de Privacidade
              periodicamente. Notificaremos os usuários sobre quaisquer
              alterações significativas. Recomendamos que você revise
              regularmente esta política para estar ciente das nossas práticas
              de privacidade.
            </p>
            <li className="text-xl list-decimal py-4">Consentimento</li>
            <p className="font-normal text-sm py-2">
              Ao utilizar o FDK, você concorda com esta Política de Privacidade.
              Se você não concordar com os termos desta política, por favor, não
              utilize o aplicativo. Esta Política de Privacidade é eficaz a
              partir de 15 de Outubro de 2023 e substitui todas as versões
              anteriores.
            </p>
          </div>
        </div>
      </section>
      <footer className="text-white flex justify-center items-center">
        FDK &copy; {year}
      </footer>
    </main>
  )
}
