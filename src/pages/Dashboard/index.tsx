import React, { useEffect, useState } from "react";
import './index.css'
import { Col, Divider, Input, Layout, Menu, Row, Statistic } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import CardStatistic from "../../components/Cards";
import Tabela from "../Tabela";
import { number } from "yup";
import { api } from "../../service/api";
import { ArrowUpOutlined, ArrowDownOutlined,DatabaseOutlined,DownloadOutlined,VerticalAlignTopOutlined, AndroidOutlined,CloseOutlined, CheckOutlined, VerticalAlignBottomOutlined, BugOutlined, LoadingOutlined } from '@ant-design/icons';
import {Container,CardWrapper} from './style'
import { IMetrics } from "../Types";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const columns = [
    {
        title: 'Código',
        dataIndex: 'cod',
        key: 'cod',
    },
    {
      title: 'Dossie',
      dataIndex: 'dossie',
      key: 'dossie',
    },
    {
      title: 'Nº processo',
      dataIndex: 'n_processo',
      key: 'n_processo',
    },
    {
      title: 'Upload Concluido',
      dataIndex: 'upload_concluido',
      key: 'upload_concluido',
      render: (upload_concluido:any) => (upload_concluido ? 'Sim' : 'Não')
    },
    {
      title: 'Erro no cadastro',
      dataIndex: 'erro_cadastro',
      key: 'erro_cadastro',
      render: (erro_cadastro:any) => (erro_cadastro ? 'Sim' : 'Não')
    },
    {
      title: 'Resposavel',
      dataIndex: 'resposavel',
      key: 'resposavel',
    },
  ];



export default function Dashboard() {
    const [collapsed, setcollapsed] = useState(false)
    const [laudos, setLaudos] = useState()
    const [totalLaudos, settotalLaudos] = useState()
    const [metrics, setmetrics] = useState({}as IMetrics)
    const [SearchLaudo, setSearchLaudo] = useState({})



    function toggle() {
        setcollapsed(!collapsed)
    }
    
    async function getRoboData(robo_id:string,dossie:string) {
        let getDossie = `&dossie=${dossie}`

        try {
            const response = await api.get(`/laudo_benner/?robo_id=${robo_id}${dossie ? getDossie : ''}`)
            console.log(response.data)
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
    
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}>
               
                    <CardWrapper>
                    
                    <CardStatistic
                    title='Total'
                    value={metrics?.totalGeral || 0}
                    suffix='Laudos'
                    color='green'
                    precision={0}
                    icon={<DatabaseOutlined />}
  
                    />

                    <CardStatistic
                    title='Aguardando processamento'
                    value={metrics?.totalUploadFalse || 0}
                    suffix='Laudos'
                    icon={<LoadingOutlined />}
                    color='green'
                    precision={0}
                    />

                    <CardStatistic
                    title='Uploads concluidos no CPJ'
                    value={metrics?.totalUploadTrue || 0}
                    suffix='Uploads'
                    icon={<VerticalAlignTopOutlined />}
                    color='green'
                    precision={0}
                    />


                    <CardStatistic
                    title='Downloads de laudos realizados'
                    value={metrics?.baixadoBennerSucesso || 0}
                    suffix='Downloads'
                    icon={<DownloadOutlined />}
                    color='green'
                    precision={0}
                    />           
                    
                    <CardStatistic
                    title='Erros durante o processamento'
                    value={metrics?.erroUploadTrue || 0}
                    suffix='Laudos'
                    icon={<BugOutlined />}
                    color='red'
                    precision={0}
                    />

                    <CardStatistic
                    title='Erros durante o download'
                    value={metrics?.baixadoBennerFail || 0}
                    suffix='Laudos'
                    icon={<VerticalAlignBottomOutlined />}
                    color='red'
                    precision={0}
                    />
                  </CardWrapper>
            <Divider/>
            <Search placeholder="Busca por dossie" onSearch={searchDossie} enterButton />

            <Tabela dataSource={laudos} columns={columns} />
            
          </Content>
          <Footer>footer</Footer>
          
        </Layout>
        
    )
}
