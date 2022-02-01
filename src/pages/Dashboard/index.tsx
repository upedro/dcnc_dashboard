import React, { useEffect, useState } from "react";
import './index.css'
import { Col, Divider, Input, Layout, Menu, Row, Statistic, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import CardStatistic from "../../components/Cards";
import Tabela from "../../components/Tabela";
import { number } from "yup";
import { api } from "../../service/api";
import { ArrowUpOutlined, ArrowDownOutlined,DatabaseOutlined,DownloadOutlined,
  VerticalAlignTopOutlined, AndroidOutlined,CloseOutlined, CheckOutlined,
   VerticalAlignBottomOutlined, BugOutlined, LoadingOutlined, DollarCircleOutlined,
   ClockCircleOutlined ,HourglassOutlined } from '@ant-design/icons';
import {Container,CardWrapper} from './style'
import { IMetrics } from "../Types";
import { Button } from "antd-mobile";
import { useAuth } from "../../auth/useAuth";

const { Header, Sider, Content, Footer } = Layout;
const { Text} = Typography;
const { Search } = Input;

const columns = [

    {
      title: 'Dossie',
      dataIndex: 'dossie',
      key: 'dossie',
    },
    {
      title: 'Nº processo',
      dataIndex: 'n_processo',
      key: 'dossie',
    },
    {
      title: 'Upload CPJ Concluido',
      dataIndex: 'upload_concluido',
      key: 'dossie',
      render: (upload_concluido:any) => (upload_concluido ? 'Sim' : 'Não')
    },
    {
      title: 'Downloado benner concluido',
      dataIndex: 'concluido',
      key: 'dossie',
      render: (erro_cadastro:any) => (erro_cadastro ? 'Sim' : 'Não')
    },
    {
      title: 'Nº de laudos baixados',
      dataIndex: 'documentos',
      key: 'dossie',
      render: (documentos:any) => (typeof documentos ? documentos.length : '' ),
    },
    {
      title: 'Erro no cadastro',
      dataIndex: 'erro_cadastro',
      key: 'dossie',
      render: (erro_cadastro:any) => (erro_cadastro ? 'Sim' : 'Não')
    },
    {
      title: 'Resposavel',
      dataIndex: 'resposavel',
      key: 'dossie',
    },
    {
      title: 'Id robô',
      dataIndex: 'robo_id',
      key: 'dossie',
    },
    {
      title: 'Id laudo no banco',
      dataIndex: 'laudo_id',
      key: 'dossie',
    },
    {
      title: 'Código',
      dataIndex: 'cod',
      key: 'dossie',
  },
  ];



export default function Dashboard() {
    const [collapsed, setcollapsed] = useState(false)
    const [laudos, setLaudos] = useState()
    const [totalLaudos, settotalLaudos] = useState()
    const [metrics, setmetrics] = useState({}as IMetrics)
    const [SearchLaudo, setSearchLaudo] = useState({})

    const auth = useAuth()

    function logout() {
      auth.logout()
    }

    function toggle() {
        setcollapsed(!collapsed)
    }
    
    async function getRoboData(robo_id:string,dossie:string) {
        let getDossie = `&dossie=${dossie}`

        try {
            const response = await api.get(`/laudo_benner/?robo_id=${robo_id}${dossie ? getDossie : ''}`)
            setLaudos(response.data.laudos)
            settotalLaudos(response.data.total)
            const metrics = await api.get(`/laudo_benner/metrics`)
            setmetrics(metrics.data)

        } catch (error) {
            console.log(error)
        }
        
    }

    async function searchDossie(dossie:string) {
        getRoboData('21516',dossie)
    }

    useEffect(() => {
        getRoboData('21516','')

    }, [])

    return (

        <Layout className="site-layout">
          <Text keyboard>Robô : Laudos de monitoramento - Benner para CPJ </Text>
                    
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: '0.6rem',
              minHeight: '100vh',
              background:'#f0f0f0'
            }}>
               
                    <CardWrapper>
                    
                    <CardStatistic
                    title='Total salvo no banco'
                    value={metrics?.totalGeral || 0}
                    suffix='Processos'
                    color='black'
                    precision={0}
                    icon={<DatabaseOutlined />}
  
                    />



                    <CardStatistic
                    title='Laudos inseridos no CPJ'
                    value={metrics?.totalUploadTrue || 0}
                    suffix='Inseridos no CPJ'
                    icon={<VerticalAlignTopOutlined />}
                    color='green'
                    precision={0}
                    />


                    <CardStatistic
                    title='Laudos baixados no Benner'
                    value={metrics?.baixadoBennerSucesso || 0}
                    suffix='Downloads'
                    icon={<DownloadOutlined />}
                    color='green'
                    precision={0}
                    />           

                    <CardStatistic
                    title='Aguardando processamento'
                    value={metrics?.totalUploadFalse || 0}
                    suffix='Processos na fila'
                    icon={<HourglassOutlined />}
                    color='blue'
                    precision={0}
                    />
                    
                    <CardStatistic
                    title='Falhas durante o processamento'
                    value={metrics?.erroUploadTrue || 0}
                    suffix='Falhas'
                    icon={<BugOutlined />}
                    color='#eb9234'
                    precision={0}
                    />
{/* 
                    <CardStatistic
                    title='Erros identificados durante o download'
                    value={metrics?.baixadoBennerFail || 0}
                    suffix='Erros'
                    icon={<VerticalAlignBottomOutlined />}
                    color='red'
                    precision={0}
                    /> */}

                    <CardStatistic
                    title='Tempo de execução robô'
                    value={(metrics?.horasTrabalho)*0.0166667 || 0}
                    suffix='Horas trabalhadas'
                    icon={<ClockCircleOutlined />}
                    color='#38614c'
                    precision={0}
                    />

                    <CardStatistic
                    title='Economia de mão de obra'
                    suffix='Reais'
                    value={((metrics?.horasTrabalho)*0.0166667)*12.5 || 0}
                    icon={<DollarCircleOutlined />}
                    color='#38614c'
                    precision={2}
                    />

                  </CardWrapper>
            <Divider/>
            <Search bordered  size="large" className="polimorfism" addonBefore="Dossiê" placeholder="Busca por dossie" onSearch={searchDossie} enterButton />

            <Tabela dataSource={laudos} columns={columns} />
            
          </Content>
          <Footer style={{display: 'flex' , justifyContent:'center'}}>

            <Button style={{maxWidth:'40%'}} block color='danger' size='middle' fill='outline' onClick={logout}>
              Sair
            </Button>

          </Footer>
          
        </Layout>
        
    )
}
