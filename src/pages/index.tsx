import Image from 'next/image'
import { Inter } from 'next/font/google'
import bg from '../../public/praia.jpg'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [relatorio, setRelatorio] = useState(false)

  useEffect(() => {

  }, [])
  return (
    <div className='w-full min-h-screen flex flex-col items-center' style={{
        backgroundImage: `url(${bg.src})`,
        width: `100%`,
        height: `100%`,
        backgroundSize: `cover`,
        }} >
      
      <div className='max-w-screen-2xl w-full h-full flex flex-col items-center rounded-xl my-5 bg-gray-300 bg-opacity-80 flex-grow shrink-0'>
        {relatorio?
        <div className='w-full h-full flex-grow-1'>
          <button className='px-3 py-2 rounded-md m-2 bg-sky-800 text-gray-200' onClick={() => {setRelatorio(!relatorio)}}>{relatorio? "Voltar": "Abrir Relatório"}</button>
          <iframe className='rounded-2xl flex-grow h-screen opacity-70' title="Report Section" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiNzkzYzIzNWQtOGEyYi00NzBmLWJlMjktYWY5Y2ZiZTYwNTQ0IiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"></iframe>
          <h3 className='font-bold mx-5'>Link para acessar relatório: <a className='text-blue-500' href="https://app.powerbi.com/view?r=eyJrIjoiNzkzYzIzNWQtOGEyYi00NzBmLWJlMjktYWY5Y2ZiZTYwNTQ0IiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9">powerbi.com</a></h3>
        </div>
        : <div className='w-full h-full flex flex-col items-center rounded-xl flex-grow'>
          <h2 className='uppercase font-bold text-2xl'>Pontifícia Universidade Católica de Minas Gerais</h2>
          <h2 className='uppercase font-bold text-2xl'>Business Inteligence</h2>
          <h1 className='text-black text-9xl font-bold my-20'>Praias</h1>
          <p className='m-10 text-justify font-medium'> As praias brasileiras são famosas por sua beleza, diversidade e atratividade turística. O Brasil possui mais de 7 mil quilômetros de litoral, com praias de diferentes características, desde as mais urbanas e movimentadas até as mais selvagens e preservadas. Neste relatório, vamos apresentar algumas informações sobre as praias brasileiras, Como: Beleza, Limpeza, Localização, Temperatura do Ar e da Agua, etc. Todas essas informações foram retiradas do site <a className='text-blue-500' href="https://praia.info/br/">praia.info</a>.</p>
          <div className='w-full px-10 font-bold text-xl'>
            <h3>Professor: Clóvis Tavares</h3>
            <h3>Aluno: Guilherme Campos</h3>
          </div>
          <button className='px-3 py-2 rounded-md m-2 bg-sky-800 text-gray-200 justify-self-end' onClick={() => {setRelatorio(!relatorio)}}>Abrir Relatório</button>
        </div>
        }
      </div>
    </div>
  )
}
