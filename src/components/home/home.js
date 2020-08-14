import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import interfile from '../../images/interfile.png';
import interfile2 from '../../images/interfile2.png';
import planetaeducacao from '../../images/planetaeducacao.jpg';

const Home = () => (
    <Row>        <Col m={3} s={12}>
          <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">About Me</h5>
            <Card>
                <div>
                    <p><b>Cursos Complementares </b></p>
                 <p> WordPress - Udemy</p>
                 <p> Desenvolvimento de Plugins WordPress - Udemy GitHub - Udemy</p>
                 <p> Web Designer - Alpha Channel</p>
                 <p> WorkShop - WordCamp</p>
                 <p> Conhecimento em: PHP, Javascript, HTML5, Photoshop, Illustrator, React</p>
                            <br/>
                    <p><b>Trabalhos Desenvolvidos</b></p>
                     <p>   Desenvolvimento de Sites com Dreamweaver, Plataforma Wix e WordPress</p>
                    <p> 	Criação de Banners promocionais, Catálago Digital e Blogs.</p>
                    <p> 	MeuPortifólio: www.majodeveloper.com.br</p>
                
                </div>
            </Card>
            <Card>
                <div>
                    <p><b>Desenvolvimento de Sites </b></p>
                    <p>"Desenvolvimento de Sites com Dreamweaver, plataforma Wix e CMS WordPress."</p>
                    <br/>
                    <p><b>Outrso Desenvolvimentos</b></p>
                    <p>"Desenvolvimento de Catálogo Digital, Bloges, Responsável por site de E-commerce ."</p>
                
                </div>
            </Card>
            <h5 className="subtitle">Experiences</h5>

              <Experience title="Interfile Full Service BPO - 10/2019 – Atual"
                          company="Função: Tecnico de Suporte Jr"
                          description="Organização e participação de Comitê de GMUD, avaliação de risco da mudança e critérios para publicação. Cadastro e validação de Revendas Atendimento ao cliente via telefone e ferramenta Service Desk para abertura de chamados "
                          avatar={interfile}
                          temp="Tempo de trabalho: 1 ano"
              /> 

              <Experience title="Interfile Full Service BPO - 02/2019 –10/2019"
                          company="Função: Analista I"
                          description="Principais atividades: 
                          Análise de risco
                          Desenvolvimento de documentos de segurança
                          Interação com o cliente para entender melhor seus problemas "
                          avatar={interfile2}
                          temp="Tempo de trabalho:1 ano e meio"
               /> 

              <Experience title="Planeta Educação Gráfica e Editora Ltda - 02/2011 – 01/2012"
                          company="Função: Coordenação de Curso "
                          description="	Recepção e entrega de documentos.
                          	Elaboração de relatório semanal.
                          	Serviços Administrativos: Arquivamento de projetos, criação de planilhas, e- mail.
                          	Agendamento  e organização de espaço para eventos.
                          	Agendamento de visitas com Gestores.
                          	Reuniões com a Matriz e equipe de supervisores.
                          	Confecção e impressão de certificados."
                          avatar={planetaeducacao}
                          temp="Tempo de trabalho: 1 ano"
              /> 

            </Col>
    </Row>
);

export default Home;