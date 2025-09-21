import Secao from "../../components/Secao";

export default function Photo() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <Secao
          src="/fotos/foto01.jpg"
          titulo="Foto na Cachoeira"
          subtitulo="março de 2025"
          descricao="Uma viagem épica, cheia de momentos inesquecíveis, acho que foi o primeiro momento que realmente paramos de agir como colegas de trabalho e começamos a nos ver de uma forma diferente."
        />
        <Secao
          src="/fotos/foto02.jpg"
          titulo="Forno da Saudade"
          subtitulo="Nosso lugar..."
          descricao="Quando penso em nós, não tem como não lembrar do nosso lugar especial, varias lembranças, varias conquistas. Onde tudo começou."
          reverse
        />
        <Secao
          src="/fotos/foto03.jpg"
          titulo="Forno da Saudade"
          descricao="Varios planos para o futuro, promessas de amor eterno."
        />
        <Secao
          src="/fotos/foto04.jpg"
          titulo="Lagoa Santa"
          subtitulo="Passeio em família"
          descricao="Esse com certeza foi um dos dias mais felizes da minha vida, não foi so um passeio qualquer, ter voce comigo, fez tudo ficar mais vivo, a água estava mais azul, o sol mais brilhante, a comida mais gostosa."
          reverse
        />
        <Secao
          src="/fotos/foto05.jpg"
          titulo="Gruta da Lapinha"
          descricao="Deitar do seu lado, mesmo que por um instante, me faz sentir a pessoa mais sortuda do mundo."
        />
        <Secao
          src="/fotos/foto06.jpg"
          titulo="Gruta da Lapinha"
          descricao="Voce consegue transformar qualquer momento em algo especial."
          reverse
        />
        <Secao
          src="/fotos/foto07.jpg"
          titulo="Lagoa Santa"
          descricao="Essa foto nao precisa de descrição, nao precisa de explicação ela fala por si só. Eu e voce, juntos, felizes, apaixonados."
        />
        <Secao
          src="/fotos/foto08.jpg"
          titulo="Lagoa Santa"
          descricao="Em tres meses, construímos memórias que ficarão para sempre em nossos corações. Memorias que quando ficarmos velhinhos em nossa casa de campo, vamos contar para os nossos netos."
          reverse
        />
        <Secao
          src="/fotos/foto09.jpg"
          titulo="Praça da Liberdade"
          subtitulo="Centro de BH"
          descricao="Apenas sentamos na praça comemos uma pipoquinha e conversamos, foi tão simples, mas tão significativo."
        />
        <Secao
          src="/fotos/foto10.jpg"
          titulo="CCBB"
          subtitulo="Museu de arte"
          descricao="É até estranho pensar que eu gosto de ir em museus, ficar olhando coisas que eu não entendo direito, algumas coisas que a 5 ou 6 meses atrás eu acharia um saco está indo, hoje eu faço com prazer. Apenas pelo prazer de estar junto de você."
          reverse
        />
        <Secao
          src="/fotos/foto11.jpg"
          titulo="Korea Chicken BH"
          subtitulo="Dois meses de namoro"
          descricao="Você não entende o quanto esse dia foi incrivel para mim, ver você planejando algo para está do meu lado não tem preço, mesmo que a comida tenha cido de procedência duvidosa. O dia foi maravilhoso."
        />
        <Secao
          src="/fotos/foto12.jpg"
          titulo="Arena MRV"
          subtitulo="A casa do Galo"
          descricao="Se algum dia eu tiver alguma duvida se você realmente me ama, é so eu olhar essa foto, saber que você foi ver um jogo do meu time comigo, no estadio mesmo contrariada, foi um ato de amor e tanto."
          reverse
        />
        <Secao
          src="/fotos/foto13.jpg"
          titulo="Galo"
          descricao="So mais uma foto com a camisa do galo por que nos estamos lindões kk."
        />
      </div>
    </div>
  )
}